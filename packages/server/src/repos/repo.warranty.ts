import { DataSource, Repository } from "typeorm";
import { IWarranty, Warranty } from "../../../shared/models/model.warranty";

export class WarrantyRepository {
  private repo: Repository<Warranty>;

  constructor(ds: DataSource) {
    this.repo = ds.getRepository(Warranty);
  }

  public getAllWarranties(): Promise<Warranty[]> {
    return this.repo.find();
  }

  public createWarranty(w: IWarranty): Promise<Warranty> {
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
