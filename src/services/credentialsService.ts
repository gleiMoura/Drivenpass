import Cryptr from "cryptr";
import { findCredentialByUserIdAndTitle, putCredentialInDatabase} from "../repositories/credentialRepository.js";

import { CreateCredentialData, findAllCredentials, findCredentialById } from "../repositories/credentialRepository.js"; //from prisma

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
};

export async function findCredentials( userId: number ) {
    const credentials = await findAllCredentials( userId );

    const decryptCredentials = credentials.map(element => {
        const cryptr = new Cryptr(process.env.SECRET);
        const decryptPassword = cryptr.decrypt(element.password);

        return {...element, password: decryptPassword};
    } )
    console.log(decryptCredentials)
    return decryptCredentials; 
};

export async function findSpecificCredential( credentialId: string, userId: number ){
    const data = await findCredentialById( credentialId );
    if( !data ) {
        throw {
            response: {
                message: "This credential doesn't exist",
                status: 404
            }
        }
    };

    if( data.userId !== userId ) {
        throw {
            response:{
                message: "this credential is not yours",
                status: 422
            }
        }
    }

    return data;
}





