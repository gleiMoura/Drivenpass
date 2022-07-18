import { Request, Response } from "express";
import  getUserIdByToken  from "../utils/sharedUtils.js";
import { CreateCardData } from "../repositories/sharedRepository.js";
import { createNewCard } from "../services/cardsService.js";


export async function createCard (req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken( authorization );
 
    const {
        title,
        cardNumber, 
        holderName, 
        secureCode, 
        expireDate, 
        isVirtual, 
        type,
        password
    } = req.body;

    const data: CreateCardData = {
        title,
        cardNumber,
        holderName,
        secureCode,
        expireDate,
        isVirtual,
        type,
        userId,
        password
    };
 
    await createNewCard(data);
 
    delete(data.password);
    delete(data.secureCode);
 
    res.status(201).send({ ...data });
}