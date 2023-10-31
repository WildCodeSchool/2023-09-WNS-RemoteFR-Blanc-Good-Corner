import express, { Request, Response } from 'express';
import * as AdService from '../services/ad.service';

const router = express.Router()

// GET /ads
router.get('/', async (request: Request, response: Response) => {
  const categoryId: number = parseInt(request.query.categoryId as string);
  let search: string = request.query.search as string;
  if (!search) {
    search = '';
  }

  const ads = await AdService.search(categoryId, search);

  response.send(ads);
});

// GET /ads/:id
router.get('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  if (isNaN(id)) {
    response.sendStatus(400);
    return;
  }

  const ad = await AdService.findAdById(id);

  response.send(ad);
});

// POST /ads
router.post('/', async (request: Request, response: Response) => {
  await AdService.create({...request.body})

  response.send("OK");
});

// PUT /ads/:id
router.put('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);
  
  try {
    const ad = await AdService.update(id, {...request.body}, request.body.categoryId);
    response.send(ad);
  }
  catch(e) {
    response.sendStatus(404);
  }
});

router.delete('/:id', async (request: Request, response: Response) => {
  const id: number = parseInt(request.params.id);

  /*const ad = await Ad.findOneBy({ id: id });
  if (ad) {
    ad.remove();
  }*/

  await AdService.deleteAd(id);

  response.sendStatus(204);
});

export default router;