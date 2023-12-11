import { Request, Response } from "express";
import { WarrantyRepository } from "../repos/repo.warranty";
import { SearchParam } from "../models/model.search";
import { Warranty } from "../models/model.warranty";

export const getAllWarranties = async (req: Request, res: Response) => {
  const param: SearchParam = {
    search: req.query.search as string,
    sort: req.query.sort as string,
    asc: req.query.asc as string,
  };

  let warranties: Warranty[] = [];

  try {
    warranties = await WarrantyRepository.getInstance().getAllWarranties(param);
  } catch (err) {
    console.log(err);

    return res
      .status(400)
      .json({ message: "The request could not be satisfied" });
  }

  const obj = warranties.map((val) => val.toObject());
  return res.json(obj);
};
