const CustomTh = ({ children }: { children?: React.ReactNode }) => {
  return <th className="sticky">{children}</th>;
};

export const WarrantyHeader = () => {
  return (
    <thead className="text-sm uppercase">
      <tr>
        <CustomTh>Product Name</CustomTh>
        <CustomTh>Effective Date</CustomTh>
        <CustomTh>Expire Date</CustomTh>
        <CustomTh></CustomTh>
      </tr>
    </thead>
  );
};
