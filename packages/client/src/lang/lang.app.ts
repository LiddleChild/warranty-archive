import { LanguageOption, WebStructureWord } from "../models/model.lang";

export const LanguageWord: { [key in LanguageOption]: WebStructureWord } = {
  th: {
    languageName: "ไทย",
    header: {
      title: "ประกันสินค้า",
      searchPlaceholder: "ค้นหาด้วยชื่อสินค้า",
      addButton: "เพิ่ม",
    },
  },
  en: {
    languageName: "Eng",
    header: {
      title: "Warranty",
      searchPlaceholder: "Search product name",
      addButton: "Add",
    },
  },
};
