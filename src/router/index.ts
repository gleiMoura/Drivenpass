import Router from "express";
import authRouter from "./authRouter.js";
import credentialsRouter from "./credentialsRouter.js";
import notesRouter from "./notesRouter.js";
import cardsRouter from "./cardsRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();

router.use( authRouter );
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(wifiRouter)

export default router;