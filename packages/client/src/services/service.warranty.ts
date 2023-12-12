import { Warranty } from "../models/model.warranty";
import { build } from "../utils/util.query";

export const getAllWarranty = async (
  search: string,
  sort: string,
  asc: boolean
): Promise<Warranty[]> => {
  console.log(search);
  const url = `http://localhost:6544/api/warranty?${build({
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
