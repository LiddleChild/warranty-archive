import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../../../.env") });

export class ProcessEnv {
  private constructor() {}

  public static DB_HOST = process.env.DB_HOST;
  public static DB_PORT = parseInt(process.env.DB_PORT || "");
  public static DB_USERNAME = process.env.DB_USERNAME;
  public static DB_PASSWORD = process.env.DB_PASSWORD;
  public static DB_DATABASE = process.env.DB_DATABASE;

  public static BACKEND_PORT = parseInt(process.env.BACKEND_PORT || "");
}
