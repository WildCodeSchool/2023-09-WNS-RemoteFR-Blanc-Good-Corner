import "reflect-metadata"
import express, { Request, Response } from 'express';
import cors from 'cors';
import { dataSource } from './config/db';
import adController from "./controllers/ad.controller";
import categoryController from "./controllers/category.controller";

const app = express();

const port: number = 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use('/ads', adController)
app.use('/categories', categoryController)

app.listen(port, () => {
  dataSource.initialize();
  console.log(`Server started at http://localhost:${port}`);
});