import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Warranty {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column() productName: string;
  @Column() effectiveDate: Date;
  @Column() expireDate: Date;
  @Column() createdAt: Date;
  @Column() updatedAt: Date;
  @Column() note: string;

  public toObject(): Object {
    return {
      productName: this.productName,
      effectiveDate: this.effectiveDate,
      expireDate: this.expireDate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      note: this.note,
    };
  }
}
