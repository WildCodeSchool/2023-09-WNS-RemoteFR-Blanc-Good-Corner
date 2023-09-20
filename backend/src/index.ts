import express, { Request, Response } from 'express';
import { Ad } from './types/ad';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./good_corner.sqlite');

const app = express();

const port: number = 3000;

app.use(express.json());

// GET /ads
app.get('/ads', (request: Request, response: Response) => {
  db.all<Ad>('SELECT * FROM ad', (err, rows: Ad[]) => {
    response.send(rows);
  });
});

// GET /ads/:id
app.get('/ads/:id', (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  db.get<Ad>('SELECT * FROM ad WHERE id = ?', [id], (err, row: Ad) => {
    response.send(row);
  });
});

// POST /ads
app.post('/ads', (request: Request, response: Response) => {
  const stmt = db.prepare("INSERT INTO ad (title, description, owner, price, picture, location, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)");
  stmt.run([
    request.body.title,
    request.body.description,
    request.body.owner,
    request.body.price,
    request.body.picture,
    request.body.location,
    new Date(),
  ]);
  response.send("OK");
});

// PUT /ads/:id
app.put('/ads/:id', (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);
  
  const stmt = db.prepare(" \
    UPDATE ad SET \
    title = ?, \
    description = ?, \
    owner = ?, \
    price = ?, \
    picture = ?, \
    location = ? \
    WHERE id = ?");

  stmt.run([
    request.body.title,
    request.body.description,
    request.body.owner,
    request.body.price,
    request.body.picture,
    request.body.location,
    id,
  ]);
  response.send("OK");
});

app.delete('/ads/:id', (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  db.run("DELETE FROM ad WHERE id = ?", id);

  response.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});