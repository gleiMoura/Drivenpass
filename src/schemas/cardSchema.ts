import joi from "joi";

const cardSchema = joi.object({
    title: joi.string().required(),
    cardNumber: joi.string()
        .required(),
    holderName: joi.string()
        .required(),
    secureCode: joi.string()
        .min(3)
        .required(),
    expireDate: joi.string()
        .pattern(new RegExp('^(0[1-9]|1[0-2])\/?([0-9]{2})$'))
        .required(),
    isVirtual: joi.boolean()
        .required(),
    type: joi.string()
        .required(),
    password: joi.string()
        .required()
});

export default cardSchema;