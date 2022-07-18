import Cryptr from "cryptr";
import { CreateWifiData } from "../repositories/sharedRepository.js";
import sharedRepository from "../repositories/sharedRepository.js";
import { verifyElement } from "../utils/sharedUtils.js";

export async function createNewWifi( data: CreateWifiData ){
    const { userId, title }= data;
    const wifi = await sharedRepository.findByUserIdAndTitle(userId, title, "wifi");
    if( wifi.wifi.length !== 0 ) {
        throw {
            response: {
                message: "You aready create a wifi with this title",
                status: 409
            }
        }
    };

    const cryptr = new Cryptr( process.env.SECRET );
    const newPassword = cryptr.encrypt(data.password);

    const newCredential = {...data, password: newPassword}

    await sharedRepository.createElement(newCredential, "wifi");
};

export async function findWifis( userId: number ){
    const wifis = await sharedRepository.findAllElements( userId, "wifi" );

    return wifis 
}

export async function findSpecificWifi( cardId:string, userId: number ){
    const data = await sharedRepository.findElementById( cardId, "wifi" );
    
    verifyElement(data, userId, "wifi");

    return data;
};

export async function deleteWifiFromDatabase( cardId:string, userId: number ){
    const data = await sharedRepository.findElementById( cardId, "wifi" );
    
    verifyElement(data, userId, "wifi");

    await sharedRepository.deleteElementById(cardId, "wifi");
}