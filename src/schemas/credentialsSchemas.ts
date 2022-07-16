import joi, { string } from "joi";

const credentialsSchema = joi.object({
    url: string().uri().required(),
    userName: string().required(),
    password: string().required(),
    title: string().required()
});

export default credentialsSchema;