import express, { Request, Response } from 'express';
import { Ad } from './types/ad';

const app = express();

const port: number = 3000;

const ads: Ad[] = [
  {
    id: 1,
    title: "Bike to sell",
    description:
      "My bike is blue, working fine. I'm selling it because I've got a new one",
    owner: "bike.seller@gmail.com",
    price: 100,
    picture:
      "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    location: "Paris",
    createdAt: "2023-09-05T10:13:14.755Z",
  },
  {
    id: 2,
    title: "Car to sell",
    description:
      "My car is blue, working fine. I'm selling it because I've got a new one",
    owner: "car.seller@gmail.com",
    price: 10000,
    picture:
      "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    location: "Paris",
    createdAt: "2023-10-05T10:14:15.922Z",
  },
];

app.use(express.json());

// GET /ads
app.get('/ads', (request: Request, response: Response) => {
  response.send(ads);
});

// POST /ads
app.post('/ads', (request: Request, response: Response) => {
  const ids: number[] = ads.map<number>((ad) => ad.id);

  const ad: Ad = {
    id: Math.max(...ids) + 1,
    ...request.body
  }

  ads.push(ad);
  response.send(ads);
});

// PUT /ads/:id
app.put('/ads/:id', (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);
  
  const newAds: Ad[] = ads.map<Ad>((ad) => {
    if (ad.id === id) {
      return {
        ...ad,
        ...request.body
      };
    }
    return ad;
  });

  response.send(newAds);
});

app.delete('/ads/:id', (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  ads.splice(ads.findIndex((ad) => ad.id === id));

  response.send(ads);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});