import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import noteSchema from "../schemas/noteSchema.js";
import { createSecurenote, getAllNotes} from "../controllers/securenoteController.js";

const notesRouter = Router();

notesRouter.post("/notes",schemaValidator(noteSchema) ,createSecurenote);

notesRouter.get("/notes", getAllNotes);

export default notesRouter;