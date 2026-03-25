import { Router, type IRouter } from "express";
import { SubmitInquiryBody } from "@workspace/api-zod";
import { db, inquiriesTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/inquiries", async (req, res) => {
  const parsed = SubmitInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  const { firstName, lastName, email, eventType, guestCount, vibe } = parsed.data;

  const [inquiry] = await db
    .insert(inquiriesTable)
    .values({
      firstName,
      lastName,
      email,
      eventType,
      guestCount: guestCount ?? null,
      vibe: vibe ?? null,
    })
    .returning({ id: inquiriesTable.id });

  res.status(201).json({ id: inquiry.id, message: "Inquiry submitted successfully" });
});

export default router;
