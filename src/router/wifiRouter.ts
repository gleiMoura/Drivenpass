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

wifiRouter.get("/wifi", getAllWifis);

wifiRouter.get("/wifi/:id", getWifi);

wifiRouter.delete("/wifi/:id", deleteWifi);

export default wifiRouter;