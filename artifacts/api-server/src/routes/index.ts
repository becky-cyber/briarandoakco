import { Router, type IRouter } from "express";
import healthRouter from "./health";
import inquiriesRouter from "./inquiries";
import subscribersRouter from "./subscribers";

const router: IRouter = Router();

router.use(healthRouter);
router.use(inquiriesRouter);
router.use(subscribersRouter);

export default router;
