export const getRandomIntegerNumber = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

export const getRandomArrayItem = (array) => {
  const itemPosition = getRandomIntegerNumber(0, array.length - 1);

  return array[itemPosition];
};

export const getBool = () => {
  return Math.random() > 0.5;
};
