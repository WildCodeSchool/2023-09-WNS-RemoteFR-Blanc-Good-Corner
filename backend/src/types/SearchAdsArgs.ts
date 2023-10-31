import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class SearchAdsArgs {
  @Field({ nullable: true})
  categoryId?: number;

  @Field({ nullable: true })
  search?: string;
}