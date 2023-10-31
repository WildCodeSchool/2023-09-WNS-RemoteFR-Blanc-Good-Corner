import { Arg, Query, Resolver } from "type-graphql";
import { Category } from "../entities/category";
import * as CategoryService from "../services/category.service";

@Resolver(Category)
export class CategoryResolver {
  @Query(() => [Category])
  async categories(@Arg("terms") terms: string): Promise<Category[]> {
    return CategoryService.getCategories(terms);
  }
}