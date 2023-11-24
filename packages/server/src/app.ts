import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../../.env") });

import { PostgresDataSource } from "./databases/db.postgres";
import { UserRepository } from "./repos/repo.user";

const main = async () => {
  await PostgresDataSource.initialize();

  const userRepo = new UserRepository(PostgresDataSource);

  userRepo.getUsers().then((data) => console.log(data));
};

main();
