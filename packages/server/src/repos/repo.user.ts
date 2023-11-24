import { DataSource, Repository } from "typeorm";
import { User } from "../models/model.user";

export class UserRepository {
  private ds: DataSource;
  private repo: Repository<User>;

  constructor(ds: DataSource) {
    this.ds = ds;
    this.repo = ds.getRepository(User);
  }

  public getUsers(): Promise<User[]> {
    return this.repo.find();
  }
}
