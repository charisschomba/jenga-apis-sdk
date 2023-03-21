export const isTokenExpired = (expiresIn): boolean => {
  return Date.now() >= expiresIn * 1000;
};
