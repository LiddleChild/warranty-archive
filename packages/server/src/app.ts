import "reflect-metadata";
import express from "express";
import cors from "cors";
import path from "path";
import { ProcessEnv } from "./utils/util.env";
import { postgresDataSource } from "./databases/db.postgres";
import { WarrantyRepository } from "./repos/repo.warranty";
import {
  createWarranty,
  getAllWarranties,
  updateWarranty,
} from "./controller/controller.api";

const main = async () => {
  await postgresDataSource.initialize();
  console.log("Database connected");

  WarrantyRepository.getInstance().initialize(postgresDataSource);

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/", express.static(path.join(__dirname, "../../client/dist")));

  app.get("/api/warranty/", getAllWarranties);
  app.post("/api/warranty", createWarranty);
  app.patch("/api/warranty", updateWarranty);

  app.listen(ProcessEnv.BACKEND_PORT, () => {
    console.log(`Server listening to :${ProcessEnv.BACKEND_PORT}`);
  });
};

main();
