export const sleep = async (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const random = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min));
};

export const generateId = () => {
  return Date.now();
};
