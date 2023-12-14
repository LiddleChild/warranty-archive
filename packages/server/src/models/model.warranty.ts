import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Warranty {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" }) name: string;
  @Column({ type: "timestamp" }) effectiveDate: Date;
  @Column({ type: "integer" }) duration: number;
  @Column({ type: "varchar" }) durationUnit: string;
  @Column({ type: "timestamp" }) createdAt: Date;
  @Column({ type: "timestamp" }) updatedAt: Date;
  @Column({ type: "varchar" }) note: string;

  public toObject(): Object {
    return {
      id: this.id,
      name: this.name,
      effectiveDate: this.effectiveDate,
      duration: this.duration,
      durationUnit: this.durationUnit,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      note: this.note,
    };
  }
}

export type WarrantyType = {
  name: string;
  effectiveDate: Date;
  duration: number;
  durationUnit: string;
  note: string;
};
