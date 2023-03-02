export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const setLocalStograge = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
