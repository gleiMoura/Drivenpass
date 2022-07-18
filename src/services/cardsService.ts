import Cryptr from "cryptr";
import { CreateCardData } from "../repositories/sharedRepository.js";
import sharedRepository from "../repositories/sharedRepository.js";

export async function createNewCard( data: CreateCardData ){
    const { userId, title }= data;
    const card = await sharedRepository.findByUserIdAndTitle(userId, title, "cards");
    if( card.cards.length !== 0 ) {
        throw {
            response: {
                message: "You aready create a card with this title",
                status: 409
            }
        }
    };

    const cryptr = new Cryptr( process.env.SECRET );
    const newPassword = cryptr.encrypt(data.password);
    const newSecureCode = cryptr.encrypt(data.secureCode);

    const newCredential = {...data, password: newPassword, secureCode: newSecureCode}

    await sharedRepository.createElement(newCredential, "cards");
}