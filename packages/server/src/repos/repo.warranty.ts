import { DataSource, Repository } from "typeorm";
import { Warranty, WarrantyType } from "../models/model.warranty";
import { SearchParam } from "../models/model.search";
import { UpdateResult } from "typeorm/browser";

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
      query.where("LOWER(w.name) LIKE :search", {
        search: `%${search.toLowerCase()}%`,
      });
    }

    if (sort) {
      if (sort === "createdAt") query.orderBy("w.createdAt", "DESC");
      else if (sort === "name") query.orderBy(`LOWER(w.${sort})`, direction);
      else if (sort === "duration")
        query
          .orderBy("w.durationUnit", direction)
          .addOrderBy("w.duration", direction);
      else query.orderBy(`w.${sort}`, direction);
    }

    return query.getMany();
  }

  public createWarranty(w: WarrantyType): Promise<Warranty> {
    const wm = new Warranty();
    wm.name = w.name;
    wm.effectiveDate = w.effectiveDate;
    wm.duration = w.duration;
    wm.durationUnit = w.durationUnit;
    wm.note = w.note;

    const now = new Date(Date.now());
    wm.createdAt = now;
    wm.updatedAt = now;

    return this.repo.save(wm);
  }

  public async updateWarranty(
    productId: number,
    w: WarrantyType
  ): Promise<UpdateResult> {
    return this.repo.update(productId, {
      updatedAt: new Date(Date.now()),
      ...w,
    });
  }
}
