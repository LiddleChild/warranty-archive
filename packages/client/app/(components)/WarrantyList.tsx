import { getAllWarranties } from "@/services/service.warranty";
import { WarrantyItem } from "./WarrantyItem";
import { WarrantyHeader } from "./WarrantyHeader";

export const WarrantyList = async () => {
  const warranties = await getAllWarranties();

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
