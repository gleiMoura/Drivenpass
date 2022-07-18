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

    await sharedRepository.createElement( securenote, "notes" );
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
    const data = await sharedRepository.findElementById( noteId, "credential" );
    
    verifyElement(data, userId, "credential");

    return data;
}