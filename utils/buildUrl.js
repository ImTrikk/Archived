export const buildUrl = (path) => {
  return import.meta.env.DEV `/api${path}`;
};
