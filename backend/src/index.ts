import "reflect-metadata"
import express, { Request, Response } from 'express';
import cors from 'cors';
import { Ad } from './entities/ad';
import sqlite3 from 'sqlite3';
import { dataSource } from './config/db';
import { Category } from "./entities/category";
import { Like } from "typeorm";
import { Tag } from "./entities/tag";

const db = new sqlite3.Database('./good_corner.sqlite');

const app = express();

const port: number = 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());

// GET /ads
app.get('/ads', async (request: Request, response: Response) => {
  const categoryId: number = parseInt(request.query.categoryId as string);

  let ads: Ad[];
  if (categoryId) {
    ads = await Ad.find({
      relations: {
        category: true
      },
      where: {
        category: {
          id: categoryId
        }
      }
    });
  }
  else {
    ads = await Ad.find({
      relations: {
        category: true
      },
    });
  }

  response.send(ads);
});

// GET /ads/:id
app.get('/ads/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  if (isNaN(id)) {
    response.sendStatus(400);
    return;
  }

  const ad = await Ad.findOne({
    relations: {
      category: true
    },
    where: { id: id },
  });

  response.send(ad);
});

// POST /ads
app.post('/ads', async (request: Request, response: Response) => {
  const ad = new Ad();
  ad.title = request.body.title;
  ad.description = request.body.description;
  ad.owner = request.body.owner;
  ad.price = request.body.price;
  ad.picture = request.body.picture;
  ad.location = request.body.location;
  ad.createdAt = new Date();

  const category = await Category.findOneBy({id: request.body.categoryId});
  if (category) {
    ad.category = category;
  }

  const tagsName = request.body.tags;
  if (tagsName && tagsName.length > 0) {
    const tagsEntities: Tag[] = [];
    for (const tagName of tagsName) {
      let tag = await Tag.findOneBy({name: tagName});
      if (!tag) {
        tag = new Tag();
        tag.name = tagName;
      }

      tagsEntities.push(tag);
    }

    console.log(tagsEntities);
    ad.tags = tagsEntities;
  }

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

    const category = await Category.findOneBy({id: request.body.categoryId});
    if (category) {
      ad.category = category;
    }

    ad.save();
    response.send(ad);
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

app.get('/categories', async (request: Request, response: Response) => {
  const terms = request.query.terms;

  let categories: Category[] = [];
  if (terms) {
    categories = await Category.find({
      where: {
        name: Like(`%${terms}%`)
      }
    });
  }
  else {
    categories = await Category.find();
  }

  response.send(categories);
});

app.listen(port, () => {
  dataSource.initialize();
  console.log(`Server started at http://localhost:${port}`);
});