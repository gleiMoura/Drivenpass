import { notes } from "@prisma/client";

export type CreateNoteData = Omit<notes, "id">;