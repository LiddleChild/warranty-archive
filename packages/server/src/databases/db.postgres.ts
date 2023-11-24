import { DataSource } from "typeorm";
import { Warranty } from "../../../shared/models/model.warranty";

export const postgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5556"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Warranty],
  subscribers: [],
  migrations: [],
});
