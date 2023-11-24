import { DataSource } from "typeorm";
import { User } from "../../../shared/models/model.user";
import { Warranty } from "../../../shared/models/model.warranty";

export const PostgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Warranty],
  subscribers: [],
  migrations: [],
});
