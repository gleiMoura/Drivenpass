import { Request, Response } from "express";
import {
    createNewNote,
    deleteNote,
    findManyNotes,
    findSpecificNote
} from "../services/securenoteService.js";
import getUserIdByToken from "../utils/sharedUtils.js";

import { CreateNoteData } from "../services/securenoteService.js";

export async function createSecurenote(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);

    const { title, note } = req.body;
    const securenote: CreateNoteData = { title, note, userId };

    createNewNote(securenote);

    res.status(200).send("note was created!")
};

export async function getAllNotes(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);

    const notes = await findManyNotes(userId);

    res.status(200).send(notes);
};

export async function getSpecificNote(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);
    const noteId: string = req.params.id;

    const note = await findSpecificNote(noteId, userId);

    res.status(200).send(note);
};

export async function deleteSpecificNote(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);
    const noteId = req.params.id;

    await deleteNote(noteId, userId);

    res.status(200).send("Note was deleted!")
}