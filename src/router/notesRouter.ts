import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import noteSchema from "../schemas/noteSchema.js";
import { createSecurenote } from "../controllers/securenoteController.js";

const notesRouter = Router();

notesRouter.post("/securenote",schemaValidator(noteSchema) ,createSecurenote);

export default notesRouter;