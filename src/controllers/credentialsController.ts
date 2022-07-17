import { Request, Response } from "express";
import  getUserIdByToken from "../utils/tokenValidator.js"
import { createNewCredential, findCredentials, findSpecificCredential } from "../services/credentialsService.js";

import { CreateCredentialData } from "../repositories/credentialRepository.js"; //from Prisma

export async function createCredential(req: Request, res: Response) {
   const { authorization } = req.headers;
   const userId = getUserIdByToken( authorization );

   const { url, userName, password, title } = req.body;
   const data: CreateCredentialData = { url, userName, password, title, userId };

   const newPassword = await createNewCredential(data);

   res.status(201).send({ ...data, password: newPassword });
};

export async function getAllCredentials(req: Request, res: Response) {
   const { authorization } = req.headers;
   const userId = getUserIdByToken( authorization );

   const credentials = await findCredentials(userId);

   res.status(200).send(credentials)
};

export async function getSpecificCredential(req: Request, res: Response) {
   const { authorization } = req.headers;
   const userId = getUserIdByToken( authorization );
   const credentialId: string = req.params.id;

   const credential = await findSpecificCredential( credentialId, userId );

   res.status(200).send( credential );
};



