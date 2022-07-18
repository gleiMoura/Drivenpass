import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import wifiSchema from "../schemas/wifiSchema.js";
import {
    createWifi,
    getAllWifis,
    getWifi,
    deleteWifi
} from "../controllers/wifiController.js"
const wifiRouter = Router();

wifiRouter.post("/wifi", schemaValidator(wifiSchema), createWifi);

export default wifiRouter;