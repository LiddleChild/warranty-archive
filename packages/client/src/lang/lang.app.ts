import { LanguageOption, WebStructureWord } from "../models/model.lang";

export const LanguageWord: { [key in LanguageOption]: WebStructureWord } = {
  th: {
    languageName: "ไทย",
    header: {
      title: "ประกันสินค้า",
      searchPlaceholder: "ค้นหาด้วยชื่อสินค้า",
      addButton: "เพิ่ม",
    },
    content: {
      productName: "ชื่อสินค้า",
      effectiveDate: "วันเริ่มผลบังคับ",
      duration: "ระยะเวลา",
      note: "หมายเหตุ",
    },
  },
  en: {
    languageName: "Eng",
    header: {
      title: "Warranty",
      searchPlaceholder: "Search product name",
      addButton: "Add",
    },
    content: {
      productName: "Product Name",
      effectiveDate: "Effective Date",
      duration: "Duration",
      note: "Note",
    },
  },
};
