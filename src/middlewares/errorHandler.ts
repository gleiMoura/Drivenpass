import {Request, Response, NextFunction} from "express";

export default function errorHandler (error, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  if (error.response) {
    return res.status(error.response.status).send(error.response.message);
  }

  res.sendStatus(500); // internal server error
}