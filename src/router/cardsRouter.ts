import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import cardSchema from "../schemas/cardSchema.js";
import { createCard } from "../controllers/cardsController.js";

const cardsRouter = Router();

cardsRouter.post("/cards", schemaValidator(cardSchema), createCard);

export default cardsRouter;