export const env = {
  BACKEND_HOST:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "localhost"
      : "192.168.1.99",
};
