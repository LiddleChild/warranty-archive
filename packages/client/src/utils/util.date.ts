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
    d.getFullYear() + parseInt(durationUnit === "year" ? `${duration}` : "0"),
    d.getMonth() + parseInt(durationUnit === "month" ? `${duration}` : "0"),
    d.getDate() + parseInt(durationUnit === "day" ? `${duration}` : "0")
  );
};

export const isExpire = (expireDate: Date): boolean => {
  return expireDate < new Date(Date.now());
};

export const getDate = (date: string): string => {
  let d = new Date(date);

  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  return `${year}-${month}-${day}`;
};

export const getDurationFromNow = (
  effectiveDate: string,
  duration: number,
  durationUnit: string
): { value: number; unit: "day" | "month" | "year" } => {
  let s = new Date(Date.now());
  let e = getExpireDate(effectiveDate, duration, durationUnit);

  let year = e.getFullYear() - s.getFullYear();
  let month = e.getMonth() - s.getMonth();
  let day = Math.ceil((e.getTime() - s.getTime()) / (1000 * 3600 * 24));

  if (month < 0 && year > 0) {
    year -= 1;
    month += 12;
  }

  if (year > 0) return { value: year, unit: "year" };
  else if (month > 0) return { value: month, unit: "month" };
  else return { value: day, unit: "day" };
};
