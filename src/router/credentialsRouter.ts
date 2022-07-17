import Router from "express";
import {
    createCredential, 
    getAllCredentials, 
    getSpecificCredential,
    deleteCredential
} from "../controllers/credentialsController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import credentialsSchema from "../schemas/credentialsSchemas.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", schemaValidator(credentialsSchema), createCredential);

credentialsRouter.get("/credentials", getAllCredentials);

credentialsRouter.get("/credentials/:id", getSpecificCredential);

credentialsRouter.delete("/credential/:id", deleteCredential);

export default credentialsRouter;