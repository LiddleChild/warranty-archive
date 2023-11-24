import { Request, Response } from "express";
import { WarrantyRepository } from "../repos/repo.warranty";

export const getAllWarranties = async (req: Request, res: Response) => {
  const warranties = await WarrantyRepository.getInstance().getAllWarranties();
  const obj = warranties.map((val) => val.toObject());
  res.json(obj);
};
