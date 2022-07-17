import Router from "express";
import { createCredential, getAllCredentials, getSpecificCredential } from "../controllers/credentialsController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import credentialsSchema from "../schemas/credentialsSchemas.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", schemaValidator(credentialsSchema), createCredential);

credentialsRouter.get("/credentials", getAllCredentials);

credentialsRouter.get("/credentials/:id", getSpecificCredential);

export default credentialsRouter;