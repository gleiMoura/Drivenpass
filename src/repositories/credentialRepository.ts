import prisma from "../config/database.js";
import { credentials } from "@prisma/client";

export type CreateCredentialData = Omit<credentials,"id">

export async function findCredentialById( credentialId: string ) {
    const id = parseInt(credentialId);
    const credential = await prisma.credentials.findUnique({
        where: {
            id
        }
    });

    return credential;
};

export async function deleteCredentialById( credentialId: string ) {
    const id = parseInt(credentialId);
    await prisma.credentials.delete({
        where: {
            id
        }
    });
};