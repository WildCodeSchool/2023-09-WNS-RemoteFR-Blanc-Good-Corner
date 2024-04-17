import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../entities/category";
import * as CategoryService from "../services/category.service";

@Resolver(Category)
export class CategoryResolver {
  @Query(() => [Category])
  async categories(@Arg("terms", { nullable: true }) terms: string): Promise<Category[]> {
    return CategoryService.getCategories(terms);
  }


  @Mutation(() => Category)
  async createCategory(@Arg("name") name: string): Promise<Category> {
    return CategoryService.create(name)
  }
}