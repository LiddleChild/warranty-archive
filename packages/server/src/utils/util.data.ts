export const isDateFormat = (date: string): boolean => {
  return !isNaN(new Date(date).getTime());
};
