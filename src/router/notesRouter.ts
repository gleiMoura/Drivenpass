import Router from "express";

const notesRouter = Router();

notesRouter.post("/", createSecurenote);

export default notesRouter;