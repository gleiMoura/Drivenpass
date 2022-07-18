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
};

async function findAllElements( userId: number, tableName: string ) {
    let elements = null;
    if(tableName === "credential") {
        elements = prisma.credentials.findMany({
            where: {
                userId
            }
        });
    }else if(tableName === "notes") {
        elements = prisma.notes.findMany({
            where: {
                userId
            }
        });
    }
   
    return elements
};

export async function findElementById( elementId: string, tableName: string ) {
    const id = parseInt(elementId);
    let element = null;

    if(tableName === "credential") {
        element = await prisma.credentials.findUnique({
            where: {
                id
            }
        });
    }else if(tableName === "notes") {
        element = await prisma.notes.findUnique({
            where: {
                id
            }
        });
    }

    return element;
};

const sharedRepository = {
    createElement,
    findByUserIdAndTitle,
    findAllElements,
    findElementById
};

export default sharedRepository;