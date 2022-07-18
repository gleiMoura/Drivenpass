import joi from "joi";

const wifiSchema = joi.object({
    title: joi.string().required(),
    networdName: joi.string().required(),
    password: joi.string().required()
});

export default wifiSchema