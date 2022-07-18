import Cryptr from "cryptr";
import { notes } from "@prisma/client";
import sharedRepository from "../repositories/sharedRepository.js";
import { verifyElement } from "../utils/sharedUtils.js";

export type CreateNoteData = Omit<notes, "id">;

export async function createNewNote( securenote: CreateNoteData ) {
    const { userId, title }= securenote;
    const note = await sharedRepository.findByUserIdAndTitle(userId, title, "notes");
    if( note.notes.length !== 0 ) {
        throw {
            response: {
                message: "You aready create a note with this title",
                status: 409
            }
        }
    };

    const cryptr = new Cryptr( process.env.SECRET );
    const cryptNote = cryptr.encrypt(securenote.note);

    await sharedRepository.createElement( {...securenote, note: cryptNote}, "notes" );
};

export async function findManyNotes(userId: number) {
    const notes = await sharedRepository.findAllElements(userId, "notes");

    if( !notes ) {
        throw {
            response:{
                message: "Notes doesn't exist in database",
                status: 404
            }
        }
    }

    return notes
};

export async function findSpecificNote(noteId: string, userId: number) {
    const data = await sharedRepository.findElementById( noteId, "notes" );
    
    verifyElement(data, userId, "notes");

    return data;
};

export async function deleteNote(noteId: string, userId: number) {
    const data = await sharedRepository.findElementById( noteId, "notes" );
    
    verifyElement(data, userId, "notes");

    await sharedRepository.deleteElementById(noteId, "notes");
}