import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import noteSchema from "../schemas/noteSchema.js";
import {
    createSecurenote, 
    deleteSpecificNote, 
    getAllNotes, 
    getSpecificNote
} from "../controllers/securenoteController.js";

const notesRouter = Router();

notesRouter.post("/notes",schemaValidator(noteSchema) ,createSecurenote);

notesRouter.get("/notes", getAllNotes);

notesRouter.get("/notes/:id", getSpecificNote);

notesRouter.delete("/notes/:id", deleteSpecificNote);

export default notesRouter;