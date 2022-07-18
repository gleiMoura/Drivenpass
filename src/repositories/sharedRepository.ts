//this repository is to put function that many othres files can use
import prisma from "../config/database.js";
import { credentials } from "@prisma/client";
import { cards } from "@prisma/client";
import { wifi } from "@prisma/client";

export type CreateCredentialData = Omit<credentials, "id">
export type CreateCardData = Omit<cards, "id">
export type CreateWifiData = Omit<wifi, "id">

async function createElement(elements: any, tableName: string) {
    if (tableName === "credential") {
        await prisma.credentials.create({
            data: { ...elements }
        })
    } else if (tableName === "notes") {
        await prisma.notes.create({
            data: { ...elements }
        })
    } else if (tableName === "cards") {
        await prisma.cards.create({
            data: { ...elements }
        })
    }else if (tableName === "wifi") {
        await prisma.wifi.create({
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
    }else if (tableName === "cards") {
        element = await prisma.users.findUnique({
            where: { id: userId },
            select: { cards: { where: { title } }
            }
        });
    }else if (tableName === "wifi") {
        element = await prisma.users.findUnique({
            where: { id: userId },
            select: { wifi: { where: { title } }
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
    }else if(tableName === "cards") {
        elements = prisma.cards.findMany({
            where: {
                userId
            }
        });
    }else if(tableName === "wifi") {
        elements = prisma.wifi.findMany({
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
    }else if(tableName === "cards") {
        element = await prisma.cards.findUnique({
            where: {
                id
            }
        });
    }else if(tableName === "wifi") {
        element = await prisma.wifi.findUnique({
            where: {
                id
            }
        });
    }

    return element;
};

async function deleteElementById( elementId: string, tableName: string ) {
    const id = parseInt(elementId);

    if(tableName === "credential") {
        await prisma.credentials.delete({
            where: {
                id
            }
        });
    }else if(tableName === "notes") {
        await prisma.notes.delete({
            where: {
                id
            }
        });
    }else if(tableName === "cards") {
        await prisma.cards.delete({
            where: {
                id
            }
        });
    }else if(tableName === "wifi") {
        await prisma.wifi.delete({
            where: {
                id
            }
        });
    }
};

const sharedRepository = {
    createElement,
    findByUserIdAndTitle,
    findAllElements,
    findElementById,
    deleteElementById
};

export default sharedRepository;