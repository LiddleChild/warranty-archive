declare module "@models/warranty" {
  export interface IWarranty {
    productName: string;
    effectiveDate: Date;
    expireDate: Date;
    note: string;
  }
}
