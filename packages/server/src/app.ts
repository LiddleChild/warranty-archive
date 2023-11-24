import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../../.env") });

import { PostgresDataSource } from "./databases/db.postgres";
import { WarrantyRepository } from "./repos/repo.warranty";

const main = async () => {
  await PostgresDataSource.initialize();

  const warrantyRepo = new WarrantyRepository(PostgresDataSource);
  warrantyRepo.getAllWarranties().then((data) => console.log(data));
};

main();
