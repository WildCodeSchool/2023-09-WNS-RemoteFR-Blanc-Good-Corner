import { Like } from "typeorm";
import { Category } from "../entities/category";

export function getCategories(terms: string): Promise<Category[]> {
  if (terms) {
    return Category.find({
      where: {
        name: Like(`%${terms}%`)
      }
    });
  }
  else {
    return Category.find();
  }
}