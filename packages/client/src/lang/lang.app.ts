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
      notFound: "ไม่พบข้อมูลที่ค้นหา",
    },
    form: {
      title: {
        add: "เพิ่มประกันสินค้า",
        edit: "แก้ไขประกันสินค้า",
      },
      productName: "ชื่อสินค้า",
      effectiveDate: "วันเริ่มผลบังคับ",
      warrantyDuration: "ระยะเวลา",
      note: "หมายเหตุ",
      doneButton: "เสร็จสิ้น",
      dropdown: {
        day: "วัน",
        month: "เดือน",
        year: "ปี",
      },
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
      notFound: "Could not find the specify data.",
    },
    form: {
      title: {
        add: "Add warranty",
        edit: "Edit warranty",
      },
      productName: "Product Name",
      effectiveDate: "Effective Date",
      warrantyDuration: "Warranty Duration",
      note: "Note",
      doneButton: "Done",
      dropdown: {
        day: "Day",
        month: "Month",
        year: "Year",
      },
    },
  },
};
