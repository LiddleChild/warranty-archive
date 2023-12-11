import { DataSource, Repository, FindManyOptions, ILike } from "typeorm";
import { Warranty, WarrantyType } from "../models/model.warranty";
import { SearchParam } from "../models/model.search";
import { QueryResult } from "typeorm/browser";

export class WarrantyRepository {
  // Singleton pattern
  private constructor() {}

  private static instance: WarrantyRepository;

  public static getInstance() {
    if (!this.instance) this.instance = new WarrantyRepository();
    return this.instance;
  }

  private repo: Repository<Warranty>;

  public initialize(ds: DataSource) {
    this.repo = ds.getRepository(Warranty);
  }

  public getAllWarranties(searchParam: SearchParam): Promise<Warranty[]> {
    const { search, sort } = searchParam;
    const direction = searchParam.asc === "true" ? "ASC" : "DESC";

    let query = this.repo.createQueryBuilder("w");

    if (search) {
      query.where("w.productName LIKE :search", { search: `%${search}%` });
    }

    if (sort) {
      let orderBy = sort === "productName" ? `LOWER(w.${sort})` : `w.${sort}`;
      query.orderBy(orderBy, direction);
    }

    return query.getMany();
  }

  public createWarranty(w: WarrantyType): Promise<Warranty> {
    const wm = new Warranty();
    wm.productName = w.productName;
    wm.effectiveDate = w.effectiveDate;
    wm.expireDate = w.expireDate;
    wm.note = w.note;

    const now = Date.now();
    wm.createdAt = new Date(now);
    wm.updatedAt = new Date(now);

    return this.repo.save(wm);
  }
}
