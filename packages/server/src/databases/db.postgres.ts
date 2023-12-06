import { DataSource } from "typeorm";
import { Warranty } from "../models/model.warranty";
import { ProcessEnv } from "../utils/util.env";

export const postgresDataSource = new DataSource({
  type: "postgres",
  host: ProcessEnv.DB_HOST,
  port: ProcessEnv.DB_PORT,
  username: ProcessEnv.DB_USERNAME,
  password: ProcessEnv.DB_PASSWORD,
  database: ProcessEnv.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Warranty],
  subscribers: [],
  migrations: [],
});
