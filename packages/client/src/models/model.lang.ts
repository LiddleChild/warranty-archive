export type LanguageOption = "en" | "th";

export type WebStructureWord = {
  languageName: string;
  dateFormat: string;
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
    notFound: string;
  };
  form: {
    title: {
      add: string;
      edit: string;
    };
    productName: string;
    effectiveDate: string;
    warrantyDuration: string;
    note: string;
    doneButton: string;
    dropdown: {
      day: string;
      month: string;
      year: string;
    };
  };
};
