import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Ad } from "../entities/ad";
import * as AdService from "../services/ad.service";
import { SearchAdsArgs } from "../types/SearchAdsArgs";
import { CreateAdInputType } from "../types/CreateAdInputType";
import { UpdateAdInputType } from "../types/UpdateAdIputType";
import { Context } from "apollo-server-core";
import { User } from "../entities/user";

@Resolver(Ad)
export class AdResolver {

  @Query(() => [Ad])
  @Authorized()
  ads(
    @Arg("search", { nullable: true }) search: string,
    @Arg("categoryId", { nullable: true }) categoryId: number,
    @Ctx() ctx: Context
  ): Promise<Ad[]> {
    console.log(ctx);
    
    return AdService.search(categoryId, search);
  }

  @Query(() => Ad)
  getAd(@Arg("id") id: number): Promise<Ad | null> {
    return AdService.findAdById(id);
  }

  @Authorized()
  @Mutation(() => String)
  async deleteAd(@Arg("id") id: number, @Ctx("user") user: User): Promise<string> {
    const ad = await AdService.findAdById(id);
    if (ad?.user.id === user.id || user.role === 'ADMIN') {
      await AdService.deleteAd(id);
    }
    return "OK";
  }

  @Authorized("USER")
  @Mutation(() => Ad)
  createAd(@Arg("ad") ad: CreateAdInputType, @Ctx("user") user: User): Promise<Ad> {
    return AdService.create({ ...ad, user });
  }

  @Mutation(() => Ad)
  updateAd(@Arg("ad") ad: UpdateAdInputType, @Arg("categoryId") categoryId: number): Promise<Ad | undefined> {
    return AdService.update(ad.id, {...ad} as Ad, categoryId);
  }
}