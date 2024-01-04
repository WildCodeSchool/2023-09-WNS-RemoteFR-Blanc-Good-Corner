import { Like } from "typeorm";
import { Category } from "../entities/category";

export function getCategories(terms: string = ''): Promise<Category[]> {
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

export function create(name: string): Promise<Category> {
  const category = new Category();
  category.name = name;

  return category.save();
}