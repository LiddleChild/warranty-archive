import { getFormattedDate } from "@/utils/util.date";
import { Warranty } from "../../../shared/models/model.warranty";

const CustomTd = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <td className={`${className} py-4`}>{children}</td>;
};

type WarrantyItemProps = {
  warranty: Warranty;
};

export const WarrantyItem = ({ warranty }: WarrantyItemProps) => {
  return (
    <tr className="border-t border-b border-n-gray odd:bg-white odd:bg-opacity-50 even:bg-n-white cursor-pointer select-none">
      <CustomTd>{warranty.productName}</CustomTd>
      <CustomTd>{getFormattedDate(new Date(warranty.effectiveDate))}</CustomTd>
      <CustomTd
        className={
          new Date(warranty.expireDate) < new Date(Date.now())
            ? "text-red-600"
            : "text-green-600"
        }
      >
        {getFormattedDate(new Date(warranty.expireDate))}
      </CustomTd>
      <CustomTd>
        <span className="material-symbols-outlined flex items-center">
          chevron_right
        </span>
      </CustomTd>
    </tr>
  );
};
