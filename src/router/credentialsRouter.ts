import Router from "express";
import { createCredential } from "../controllers/credentialsController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import credentialsSchema from "../schemas/credentialsSchemas.js";
import { verifyToken } from "../middlewares/tokenValidator.js";


const credentialsRouter = Router();

credentialsRouter.post("credentials/create", schemaValidator(credentialsSchema), verifyToken, createCredential);

export default credentialsRouter;