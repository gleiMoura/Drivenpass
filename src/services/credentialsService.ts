import Cryptr from "cryptr";
import sharedRepository from "../repositories/sharedRepository.js";

import { CreateCredentialData, 
        findCredentialById,
        deleteCredentialById } from "../repositories/credentialRepository.js"; //from prisma
import { verifyElement } from "../utils/sharedUtils.js";

export async function createNewCredential( data: CreateCredentialData ) {
    const { userId, title }= data;
    const credential = await sharedRepository.findByUserIdAndTitle(userId, title, "credential");
    if( credential.credentials.length !== 0 ) {
        throw {
            response: {
                message: "You aready create a credential with this title",
                status: 409
            }
        }
    };

    const cryptr = new Cryptr( process.env.SECRET );
    const newPassword = cryptr.encrypt(data.password);

    const newCredential = {...data, password: newPassword}

    await sharedRepository.createElement(newCredential, "credential");
};

export async function findCredentials( userId: number ) {
    const credentials = await sharedRepository.findAllElements( userId, "credential" );

    const decryptCredentials = credentials.map(element => {
        const cryptr = new Cryptr(process.env.SECRET);
        const decryptPassword = cryptr.decrypt(element.password);

        return {...element, password: decryptPassword};
    } )

    return decryptCredentials; 
};

export async function findSpecificCredential( credentialId: string, userId: number ){
    const data = await findCredentialById( credentialId );
    
    verifyElement(data, userId, "credential");

    return data;
};

export async function deleteCredentialFromDatabase( credentialId: string, userId: number ) {
    const data = await findCredentialById( credentialId );
    
    verifyElement(data, userId, "credential");

    await deleteCredentialById(credentialId);
}





