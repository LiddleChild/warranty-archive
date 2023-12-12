import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Warranty {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" }) productName: string;
  @Column({ type: "timestamp" }) effectiveDate: Date;
  @Column({ type: "timestamp" }) expireDate: Date;
  @Column({ type: "timestamp" }) createdAt: Date;
  @Column({ type: "timestamp" }) updatedAt: Date;
  @Column({ type: "varchar" }) note: string;

  public toObject(): Object {
    return {
      productId: this.id,
      productName: this.productName,
      effectiveDate: this.effectiveDate,
      expireDate: this.expireDate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      note: this.note,
    };
  }
}

export type WarrantyType = {
  productName: string;
  effectiveDate: Date;
  expireDate: Date;
  note: string;
};
