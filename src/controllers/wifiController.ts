import { Request, Response } from "express";
import getUserIdByToken from "../utils/sharedUtils.js";
import { CreateWifiData } from "../repositories/sharedRepository.js";
import {
    createNewWifi,
    findWifis,
    findSpecificWifi,
    deleteWifiFromDatabase
} from "../services/wifiService.js";

export async function createWifi(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);

    const { title, networkName, password } = req.body;

    const data: CreateWifiData = {title, networkName, password, userId };

    await createNewWifi(data);

    delete (data.password);

    res.status(201).send({ ...data });
};

export async function getAllWifis(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);

    const wifis = await findWifis(userId);

    res.status(200).send(wifis)
}

export async function getWifi(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);
    const wifiId: string = req.params.id;

    const card = await findSpecificWifi(wifiId, userId);

    res.status(200).send(card);
};

export async function deleteWifi(req: Request, res: Response) {
    const { authorization } = req.headers;
    const userId = getUserIdByToken(authorization);
    const wifiId = req.params.id;

    await deleteWifiFromDatabase(wifiId, userId);

    res.status(200).send("Wifi was deleted!")
}