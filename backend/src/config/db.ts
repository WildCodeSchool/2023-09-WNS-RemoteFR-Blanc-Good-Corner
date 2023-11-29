import { DataSource } from "typeorm";
import { Ad } from "../entities/ad";
import { Category } from "../entities/category";
import { Tag } from "../entities/tag";

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "goodcorner",
  password: "password",
  database: "goodcornerdb",
  entities: [Ad, Category, Tag],
  logging: true,
  synchronize: false,
  migrations: ["migrations/*.ts"],
});