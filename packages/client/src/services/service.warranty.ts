import { Warranty } from "../models/model.warranty";
import { env } from "../utils/util.env";
import { build } from "../utils/util.query";

export const getAllWarranty = async (
  search: string,
  sort: string,
  asc: boolean
): Promise<Warranty[]> => {
  const url = `http://${env.BACKEND_HOST}:6544/api/warranty?${build({
    search,
    sort,
    asc: String(asc),
  })}`;

  try {
    let response = await fetch(url);
    let json = await response.json();
    return Promise.resolve(json);
  } catch (err) {
    console.log(err);
    return Promise.resolve([]);
  }
};

export const createWarranty = async (warranty: Warranty): Promise<boolean> => {
  const url = `http://${env.BACKEND_HOST}:6544/api/warranty`;

  try {
    let response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(warranty),
    });
    return Promise.resolve(response.ok);
  } catch (err) {
    console.log(err);
    return Promise.resolve(false);
  }
};
