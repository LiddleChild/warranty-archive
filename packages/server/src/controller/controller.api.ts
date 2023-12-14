import { Request, Response } from "express";
import { WarrantyRepository } from "../repos/repo.warranty";
import { SearchParam } from "../models/model.search";
import { Warranty, WarrantyType } from "../models/model.warranty";
import { isDateFormat } from "../utils/util.data";

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
  return res.status(200).json(obj);
};

export const createWarranty = async (req: Request, res: Response) => {
  const body = req.body;

  if (!body.productName || body.productName.trim().length == 0)
    return res
      .status(400)
      .json({ message: "Product name could not be empty." });

  if (!isDateFormat(body.effectiveDate) || !isDateFormat(body.expireDate))
    return res
      .status(400)
      .json({ message: "The request date could not be parsed" });

  const warranty: WarrantyType = {
    productName: body.productName,
    note: body.note,
    effectiveDate: new Date(body.effectiveDate),
    expireDate: new Date(body.expireDate),
  };

  try {
    await WarrantyRepository.getInstance().createWarranty(warranty);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "The request could not be satisfied" });
  }

  return res.status(201).json(body);
};

export const updateWarranty = async (req: Request, res: Response) => {
  const productId = req.body.productId;
  const body = req.body;

  if (!productId)
    return res.status(400).json({ message: "Product id must be specified" });

  if (
    (body.effectiveDate && !isDateFormat(body.effectiveDate)) ||
    (body.expireDate && !isDateFormat(body.expireDate))
  )
    return res
      .status(400)
      .json({ message: "The request date could not be parsed" });

  const warranty: WarrantyType = {
    productName: body.productName,
    note: body.note,
    effectiveDate: new Date(body.effectiveDate),
    expireDate: new Date(body.expireDate),
  };

  try {
    await WarrantyRepository.getInstance().updateWarranty(productId, warranty);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "The request could not be updated" });
  }

  return res.status(202).json({ message: "The warranty has been updated" });
};
