import { Request, Response } from "express";
import verifyToken from "../utils/tokenValidator.js";
import { createNewCredential } from "../services/credentialsService.js";
import { CreateCredentialData } from "../repositories/credentialRepository.js";

export async function createCredential (req: Request, res: Response) {
   const { authorization }:any = req.headers;
   if( !authorization ) return res.status(422).send("Authorization problem"); 
   const token = authorization?.replace("Bearer ", "");

   const { url, userName, password, title } = req.body;
   const userId = verifyToken( token );

   const data: CreateCredentialData = { url, userName, password, title, userId };
   
   const newPassword = await createNewCredential( data );

   res.status(201).send({...data, password: newPassword});
}