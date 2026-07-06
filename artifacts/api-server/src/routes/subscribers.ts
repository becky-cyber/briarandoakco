import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { SubscribeToMailingListBody } from "@workspace/api-zod";
import { db, subscribersTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/subscribers", async (req, res) => {
  const parsed = SubscribeToMailingListBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  const { email } = parsed.data;

  const [subscriber] = await db
    .insert(subscribersTable)
    .values({ email })
    .onConflictDoNothing({ target: subscribersTable.email })
    .returning({ id: subscribersTable.id });

  if (!subscriber) {
    const [existing] = await db
      .select({ id: subscribersTable.id })
      .from(subscribersTable)
      .where(eq(subscribersTable.email, email));

    res.status(201).json({ id: existing?.id ?? 0, message: "You're already on the list" });
    return;
  }

  res.status(201).json({ id: subscriber.id, message: "Subscribed successfully" });
});

export default router;
