export const buildUrl = (path) => {
  return import.meta.env.DEV !== "production"
    ? `http://localhost:3000/api${path}`
    : `/api${path}`;
};
