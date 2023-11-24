import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../../.env") });

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

  app.listen(parseInt(process.env.BACKEND_PORT || "5556"), () => {
    console.log(
      `Server started at port: ${process.env.BACKEND_PORT || "5556"}`
    );
  });
};

main();
