import joi from "joi";

const credentialsSchema = joi.object({
    url: joi.string().uri().required(),
    userName: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required()
});

export default credentialsSchema;