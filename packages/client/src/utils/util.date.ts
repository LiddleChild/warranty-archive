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

export const getExpireDate = (
  effectiveDate: string,
  duration: number,
  durationUnit: string
): Date => {
  let d = new Date(effectiveDate);

  return new Date(
    d.getFullYear() + parseInt(durationUnit === "year" ? duration : 0),
    d.getMonth() + parseInt(durationUnit === "month" ? duration : 0),
    d.getDate() + parseInt(durationUnit === "day" ? duration : 0)
  );
};

export const isExpire = (expireDate: Date): boolean => {
  return expireDate < new Date(Date.now());
};
