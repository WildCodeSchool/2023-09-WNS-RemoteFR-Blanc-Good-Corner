import "reflect-metadata"
import express, { Request, Response } from 'express';
import { Ad } from './entities/ad';
import sqlite3 from 'sqlite3';
import { dataSource } from './config/db';

const db = new sqlite3.Database('./good_corner.sqlite');

const app = express();

const port: number = 3000;

app.use(express.json());

// GET /ads
app.get('/ads', async (request: Request, response: Response) => {
  const ads = await Ad.find();
  response.send(ads);
});

// GET /ads/:id
app.get('/ads/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  const ad = await Ad.findOneBy({ id: id });

  response.send(ad);
});

// POST /ads
app.post('/ads', (request: Request, response: Response) => {
  const ad = new Ad();
  ad.title = request.body.title;
  ad.description = request.body.description;
  ad.owner = request.body.owner;
  ad.price = request.body.price;
  ad.picture = request.body.picture;
  ad.location = request.body.location;
  ad.createdAt = new Date();
  

  ad.save();

  response.send("OK");
});

// PUT /ads/:id
app.put('/ads/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);
  
  const ad = await Ad.findOneBy({ id: id });
  if (ad) {
    ad.title = request.body.title;
    ad.description = request.body.description;
    ad.owner = request.body.owner;
    ad.price = request.body.price;
    ad.picture = request.body.picture;
    ad.location = request.body.location;
    ad.save();
    response.send(ad);
    return;
  }
  
  response.sendStatus(404);
});

app.delete('/ads/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  /*const ad = await Ad.findOneBy({ id: id });
  if (ad) {
    ad.remove();
  }*/

  await Ad.delete({ id: id });

  response.sendStatus(204);
});

app.listen(port, () => {
  dataSource.initialize();
  console.log(`Server started at http://localhost:${port}`);
});