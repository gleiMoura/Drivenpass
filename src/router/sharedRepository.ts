//this repository is to put function that many othres files can use
import prisma from "../config/database.js";
import { credentials } from "@prisma/client";

export type CreateCredentialData = Omit<credentials, "id">

async function createElement(elements: any, tableName: string) {
    if (tableName === "credential") {
        await prisma.credentials.create({
            data: { ...elements }
        })
    } else if (tableName === "notes") {
        await prisma.notes.create({
            data: { ...elements }
        })
    }
};

export async function findByUserIdAndTitle(userId: number, title: string, tableName: string) {
    let element = null;

    if (tableName === "credential") {
        element = await prisma.users.findUnique({
            where: { id: userId },
            select: { credentials: { where: { title } } }
        });
    } else if (tableName === "notes") {
        element = await prisma.users.findUnique({
            where: { id: userId },
            select: { notes: { where: { title } }
            }
        });
    }
    return element;
}

const sharedRepository = {
    createElement,
    findByUserIdAndTitle
};

export default sharedRepository;