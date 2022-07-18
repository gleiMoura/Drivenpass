import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import cardSchema from "../schemas/cardSchema.js";
import {
    createCard, 
    getAllCards, 
    getCard
} from "../controllers/cardsController.js";

const cardsRouter = Router();

cardsRouter.post("/cards", schemaValidator(cardSchema), createCard);

cardsRouter.get("/cards", getAllCards);

cardsRouter.get("/cards/:id", getCard);

export default cardsRouter;