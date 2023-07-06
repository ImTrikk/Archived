// export const buildUrl = (path) => {
//   return import.meta.env.DEV
//     ? `http://localhost:3001/api${path}`
//     : `/api${path}`;
// };


export const buildUrl = (path) => {
  const isDev = false; // Set this variable manually to indicate the environment

  return isDev ? `http://localhost:3001/api${path}` : `/api${path}`;
};
