import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import cardSchema from "../schemas/cardSchema.js";
import {
    createCard, 
    getAllCards, 
    getCard,
    deleteCard
} from "../controllers/cardsController.js";

const cardsRouter = Router();

cardsRouter.post("/cards", schemaValidator(cardSchema), createCard);

cardsRouter.get("/cards", getAllCards);

cardsRouter.get("/cards/:id", getCard);

cardsRouter.delete("/cards/:id", deleteCard);

export default cardsRouter;