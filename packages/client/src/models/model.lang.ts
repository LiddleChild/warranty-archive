export type LanguageOption = "en" | "th";

export type WebStructureWord = {
  languageName: string;
  header: {
    title: string;
    searchPlaceholder: string;
    addButton: string;
  };
  content: {
    productName: string;
    effectiveDate: string;
    duration: string;
    note: string;
  };
};
