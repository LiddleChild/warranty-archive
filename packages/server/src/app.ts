import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../../.env") });

import { PostgresDataSource } from "./databases/db.postgres";
import { UserRepository } from "./repos/repo.user";
import { WarrantyRepository } from "./repos/repo.warranty";

const main = async () => {
  await PostgresDataSource.initialize();

  const userRepo = new UserRepository(PostgresDataSource);
  userRepo.getUsers().then((data) => console.log(data));

  const warrantyRepo = new WarrantyRepository(PostgresDataSource);
  warrantyRepo.getAllWarranties().then((data) => console.log(data));
};

main();
