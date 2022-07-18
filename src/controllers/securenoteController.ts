import {Request, Response} from "express"; 
import { createNewNote } from "../services/securenoteService.js";
import getUserIdByToken from "../utils/sharedUtils";

import { CreateNoteData } from "../services/securenoteService.js";

export async function createSecurenote(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken( authorization );
 
    const { title, note } = req.body;
    const securenote: CreateNoteData = { title, note, userId };

    createNewNote(securenote);

    res.status(200).send("note was created!")
}