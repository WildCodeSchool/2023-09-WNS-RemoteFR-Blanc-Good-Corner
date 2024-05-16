import { DeleteResult, Like } from "typeorm";
import { Ad } from "../entities/ad";
import { Category } from "../entities/category";
import { Tag } from "../entities/tag";
import { User } from "../entities/user";
import { redisClient } from "../config/server";
import * as cacheService from "./cache.service";

export async function findAdById(id: number): Promise<Ad | null> {
  const cacheKey = `Ad-details-${id}`;
  let result;
  result = await cacheService.getValue(cacheKey);

  if (!result) {
    result =  Ad.findOne({
      relations: {
        category: true,
        tags: true,
        user: true
      },
      where: { id: id },
    });
    cacheService.setValue(cacheKey, result);
  }

  return result;
}

export async function search(categoryId: number | undefined, search: string = ''): Promise<Ad[]> {
  const cacheKey = `Ad-${categoryId}-${search}`;
  console.log(cacheKey);
  let results;
  results = await cacheService.getValue(cacheKey);

  if (categoryId) {
    if (!results) {
      results = await Ad.find({
        relations: {
          category: true
        },
        where: {
          category: {
            id: categoryId,
          },
          title: Like(`%${search}%`)
        }
      });

      await cacheService.setValue(cacheKey, results);
    }
  }
  else {
    results = Ad.find({
      relations: {
        category: true
      },
      where: {
        title: Like(`%${search}%`)
      }
    });

    await cacheService.setValue(cacheKey, results);
  }

  return results;
}

export async function create(adsData: {
  title: string, 
  description: string,
  owner: string,
  price: number,
  picture: string,
  location: string,
  categoryId: number,
  tags: string[],
  user: User
}): Promise<Ad> {
  const ad = new Ad(adsData);
  
  ad.category = {
    id: adsData.categoryId
  } as Category;
  // const category = await Category.findOneBy({id: adsData.categoryId});

  // if (category) {
  //   ad.category = category;
  // }

  if (adsData.tags && adsData.tags.length > 0) {
    const tagsEntities: Tag[] = [];
    for (const tagName of adsData.tags) {
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

  return ad.save();
}

export async function update(id: number, ad: Ad, categoryId: number): Promise<Ad | undefined> {
  const adToupdate = await findAdById(id);

  if (!adToupdate) {
    throw new Error("Ad not found");
  }
  
  if (adToupdate) {
    adToupdate.title = ad.title;
    adToupdate.description = ad.description;
    adToupdate.owner = ad.owner;
    adToupdate.price = ad.price;
    adToupdate.picture = ad.picture;
    adToupdate.location = ad.location;

    const category = await Category.findOneBy({id: categoryId});
    if (category) {
      adToupdate.category = category;
    }

    cacheService.invalidateValue(`Ad-details-${ad.id}`);
    return adToupdate.save();
  }
}

export function deleteAd(id: number): Promise<DeleteResult> {
  cacheService.invalidateValue(`Ad-details-${id}`);
  return Ad.delete({ id: id });
}