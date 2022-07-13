import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import "express-async-errors";
import router from "./src/router/index.js";
import errorHandler from "./src/middlewares/errorHandler.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(chalk.green(`API is up in port ${port}`));
})

