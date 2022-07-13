import { Request, Response, NextFunction } from "express";

export default function schemaValidator(schema) {
    return (req: Request, res:Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false })
        if(validation.error) {
            return res.status(410).send(validation.error.details);
        }
        next();
    }
}