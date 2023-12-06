import { Warranty } from "../../../shared/models/model.warranty";
import { WarrantyItem } from "./WarrantyItem";

export const WarrantyList = () => {
  const warranty = [{}] as Warranty[];
  return (
    <div>
      {warranty.map((val, i) => (
        <WarrantyItem key={i} warranty={val} />
      ))}
    </div>
  );
};
