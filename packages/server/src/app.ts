import { ProcessEnv } from "./utils/util.env";
import express from "express";
import { postgresDataSource } from "./databases/db.postgres";
import { WarrantyRepository } from "./repos/repo.warranty";
import { getAllWarranties } from "./controller/controller.api";

const main = async () => {
  await postgresDataSource.initialize();
  WarrantyRepository.getInstance().initialize(postgresDataSource);

  const app = express();

  app.use(express.json());

  app.get("/api/warranty/", getAllWarranties);

  app.listen(ProcessEnv.BACKEND_PORT, () => {
    console.log(`Server started at port: ${ProcessEnv.BACKEND_PORT}`);
  });
};

main();
