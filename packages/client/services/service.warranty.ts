import axios from "axios";
import { Warranty } from "../../shared/models/model.warranty";
import { env } from "@/utils/util.env";

export const getAllWarranties = async (): Promise<Warranty[]> => {
  try {
    const url = `http://localhost:${env.BACKEND_PORT}/api/warranty`;
    const data = await axios.get(url);

    return Promise.resolve(data.data as Warranty[]);
  } catch (err) {
    console.log(err);
    return Promise.reject([]);
  }
};
