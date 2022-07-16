import { Request, Response } from "express";
import { verifyToken } from "../utils/credentialUtils.js";

export async function createCredential (req: Request, res: Response) {
    const token = req.header['x-access-token'];

    verifyToken( token );
}