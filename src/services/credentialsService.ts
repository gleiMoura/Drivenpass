import Cryptr from "cryptr";
import { findCredentialByUserIdAndTitle, putCredentialInDatabase} from "../repositories/credentialRepository.js";

import { CreateCredentialData } from "../repositories/credentialRepository.js";// coming from prisma

export async function createNewCredential( data: CreateCredentialData ) {
    const { userId, title }= data;
    const credential = await findCredentialByUserIdAndTitle( userId, title);
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

    await putCredentialInDatabase(newCredential);
    
    return newPassword;
}




