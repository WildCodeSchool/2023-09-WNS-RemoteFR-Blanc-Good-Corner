import { DataSource } from "typeorm";
import { Ad } from "../entities/ad";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./good_corner_typeorm.sqlite",
  entities: [Ad],
  logging: true,
  synchronize: true,
});