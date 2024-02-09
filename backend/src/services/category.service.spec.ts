import * as categoryService from "../services/category.service";
import { Category } from "../entities/category";

const categoryMock = jest
  .spyOn(Category.prototype, 'save')
  .mockImplementation(async () => {
    return {
      name: "Voiture"
    } as Category
  });

describe("Category service", () => {
  it("should insert a new category", async () => {
    //Category.save.mockResolvedValue({name: "Voiture"});

    const category = await categoryService.create("Voiture");

    expect(category.name).toBe("Voiture");
    expect(categoryMock).toHaveBeenCalled();
  });
});