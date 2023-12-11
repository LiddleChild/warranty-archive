export const build = (params: { [key: string]: string }): string => {
  return Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
};
