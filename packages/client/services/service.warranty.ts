import axios from "axios";
import { IWarranty } from "../../shared/models/model.warranty";
import { env } from "@/utils/util.env";

export const getAllWarranties = async (): Promise<IWarranty[]> => {
  try {
    const url = `http://localhost:${
      process.env.NEXT_PUBLIC_BACKEND_PORT || ""
    }/api/warranty`;
    const data = await axios.get(url);

    return Promise.resolve(data.data as IWarranty[]);
  } catch (err) {
    console.log(err);
    return Promise.reject([]);
  }
};
