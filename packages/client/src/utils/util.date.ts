export const getFormattedDate = (
  date: string,
  locale: string = "en-UK"
): string => {
  return new Date(date).toLocaleString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const isPassed = (date: string) => {
  return new Date(date) < new Date(Date.now());
};
