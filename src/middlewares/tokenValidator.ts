import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
        const token = req.header['x-access-token'];

        verify(token, process.env.SECRET, (err) => {
            if(err) {
               return res.status(401).send("Invalid authentication!");
            }
        });

        next();
}
