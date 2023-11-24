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
}

export interface IWarranty {
  productName: string;
  effectiveDate: Date;
  expireDate: Date;
  note: string;
}
