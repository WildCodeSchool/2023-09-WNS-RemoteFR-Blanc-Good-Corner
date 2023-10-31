import express, { Request, Response } from 'express';
import * as CategoryService from '../services/category.service';

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
  const terms: string = request.query.terms as string;

  const categories = await CategoryService.getCategories(terms);

  response.send(categories);
});

export default router;