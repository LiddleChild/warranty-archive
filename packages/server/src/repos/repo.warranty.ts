import { DataSource, Repository } from "typeorm";
import { Warranty, WarrantyType } from "../models/model.warranty";

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

  public getAllWarranties(): Promise<Warranty[]> {
    return this.repo.find();
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
