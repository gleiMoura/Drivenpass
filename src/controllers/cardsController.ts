import { Request, Response } from "express";
import getUserIdByToken from "../utils/sharedUtils.js";
import { CreateCardData } from "../repositories/sharedRepository.js";
import {
    createNewCard,
    findCards,
    findSpecificCard,
    deleteCardFromDatabase
} from "../services/cardsService.js";


export async function createCard(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);

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

    delete (data.password);
    delete (data.secureCode);

    res.status(201).send({ ...data });
};

export async function getAllCards(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);

    const cards = await findCards(userId);

    res.status(200).send(cards)
}

export async function getCard(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);
    const cardId: string = req.params.id;

    const card = await findSpecificCard(cardId, userId);

    res.status(200).send(card);
};

export async function deleteCard(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);
    const cardId = req.params.id;

    await deleteCardFromDatabase(cardId, userId);

    res.status(200).send("Card was deleted!")
}