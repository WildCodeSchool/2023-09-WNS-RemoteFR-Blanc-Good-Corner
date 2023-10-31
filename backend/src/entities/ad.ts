import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category";
import { Tag } from "./tag";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Ad extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({length: 100})
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  owner: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  picture: string;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  createdAt?: Date;

  // @Field(() => Category)
  @ManyToOne(() => Category, category => category.ads)
  category?: Category;

  @ManyToMany(() => Tag, {
    cascade: ["insert"]
  })
  @JoinTable()
  tags?: Tag[];

  constructor(datas: {
    title: string, 
    description: string,
    owner: string,
    price: number,
    picture: string,
    location: string,
  } | null = null) {
    super();
    if (datas) {
      this.title = datas.title;
      this.description = datas.description;
      this.owner = datas.owner;
      this.price = datas.price;
      this.picture = datas.picture;
      this.location = datas.location;
      this.createdAt = new Date();
    }
  }
}
