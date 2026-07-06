import { Router, type IRouter } from "express";
import mailchimp, { type MailchimpApiErrorResponse } from "@mailchimp/mailchimp_marketing";
import { SubscribeToMailingListBody } from "@workspace/api-zod";

const router: IRouter = Router();

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

if (MAILCHIMP_API_KEY && MAILCHIMP_SERVER_PREFIX) {
  mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER_PREFIX,
  });
}

function isMailchimpApiError(error: unknown): error is MailchimpApiErrorResponse {
  return typeof error === "object" && error !== null && "status" in error;
}

router.post("/subscribers", async (req, res) => {
  const parsed = SubscribeToMailingListBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_AUDIENCE_ID) {
    req.log.error("Mailchimp is not configured: missing API key, server prefix, or audience ID");
    res.status(500).json({ error: "Mailing list signup is temporarily unavailable. Please try again later." });
    return;
  }

  const { email } = parsed.data;

  try {
    const member = await mailchimp.lists.addListMember(MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
    });

    res.status(201).json({ id: member.id, message: "Subscribed successfully" });
  } catch (error) {
    if (isMailchimpApiError(error)) {
      const detail = error.response?.body?.detail ?? "";

      if (detail.toLowerCase().includes("already a list member")) {
        res.status(200).json({ id: "", message: "You're already on the list" });
        return;
      }

      if (error.status === 400) {
        req.log.warn({ detail }, "Mailchimp rejected subscribe request");
        res.status(400).json({ error: "That email address looks invalid. Please double-check it and try again." });
        return;
      }
    }

    req.log.error({ error }, "Failed to subscribe member to Mailchimp");
    res.status(502).json({ error: "We couldn't add you to the list right now. Please try again in a moment." });
  }
});

export default router;
