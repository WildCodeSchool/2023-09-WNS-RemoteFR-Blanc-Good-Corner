import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateAdInputType {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  owner: string;

  @Field()
  price: number;

  @Field()
  picture: string;

  @Field()
  location: string;
}