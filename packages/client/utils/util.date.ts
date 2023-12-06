export const getFormattedDate = (
  date: Date,
  local: string = "en-UK"
): string => {
  return date.toLocaleDateString(local, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
