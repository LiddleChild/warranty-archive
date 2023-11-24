import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column() productName: string;
  @Column() effectiveDate: Date;
  @Column() expireDate: Date;
  @Column() createdAt: Date;
  @Column() updatedAt: Date;
  @Column() note: string;
}
