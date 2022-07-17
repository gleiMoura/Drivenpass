import {Request, Response} from "express"; 
import { createNewNote } from "../services/securenoteService.js";
import { CreateNoteData } from "../repositories/notesRepository.js";
import getUserIdByToken from "../utils/credentialUtil";

export async function createSecurenote(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken( authorization );
 
    const { title, note } = req.body;
    const data: CreateNoteData = { title, note, userId };

    createNewNote(data);

}