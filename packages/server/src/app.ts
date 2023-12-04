import { ProcessEnv } from "./utils/util.env";
import express from "express";
import { postgresDataSource } from "./databases/db.postgres";
import { WarrantyRepository } from "./repos/repo.warranty";
import cors from "cors";
import { getAllWarranties } from "./controller/controller.api";

const main = async () => {
  await postgresDataSource.initialize();
  console.log("Database connected");

  WarrantyRepository.getInstance().initialize(postgresDataSource);

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/api/warranty/", getAllWarranties);

  app.listen(ProcessEnv.BACKEND_PORT, () => {
    console.log(`Server listening to :${ProcessEnv.BACKEND_PORT}`);
  });
};

main();
