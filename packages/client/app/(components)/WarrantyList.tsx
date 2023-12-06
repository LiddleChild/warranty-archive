"use client";

import { getAllWarranties } from "@/services/service.warranty";
import { WarrantyItem } from "./WarrantyItem";
import { WarrantyHeader } from "./WarrantyHeader";
import { useEffect, useState } from "react";
import { IWarranty } from "../../../shared/models/model.warranty";

export const WarrantyList = () => {
  // const warranties = await getAllWarranties();
  const [warranties, setWarranties] = useState<IWarranty[]>([]);

  useEffect(() => {
    getAllWarranties().then((res) => setWarranties(res));
  }, []);

  return (
    <table className="w-full text-left border-collapse">
      <WarrantyHeader />
      <tbody>
        {warranties.map((val, i) => (
          <WarrantyItem key={i} warranty={val} />
        ))}
      </tbody>
    </table>
  );
};
