export const sleep = async (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const random = (min: number, max: number, decimal = 0) => {
  return (
    Math.round((Math.random() * (max - min) + min) * 10 ** decimal) /
    10 ** decimal
  );
};

export const generateId = () => {
  return Date.now();
};
