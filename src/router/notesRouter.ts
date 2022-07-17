import Router from "express";
import { createSecurenote } from "../controllers/securenoteController.js";

const notesRouter = Router();

notesRouter.post("/securenote", createSecurenote);

export default notesRouter;