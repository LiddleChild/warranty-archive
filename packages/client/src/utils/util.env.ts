export const env = {
  BACKEND_HOST:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "localhost"
      : process.env.VUE_APP_BACKEND_HOST,
};
