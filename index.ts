import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(json());

const port = process.env.PORT;

app.listen(port, () => {
    console.log(chalk.green(`API is up in port ${port}`));
})

