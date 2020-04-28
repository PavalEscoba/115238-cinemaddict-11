import {DESCRIPTION, POSTERS} from "../consts/DESCRIPTION";
import {getRandomIntegerNumber, getRandomArrayItem} from "../utils";

const generateDescription = (array) => {
  return array.slice(0, getRandomIntegerNumber(1, array.length - 1)).join(` `);
};


const generateFilm = () => {
  return {
    description: generateDescription(DESCRIPTION),
    poster: getRandomArrayItem(POSTERS),
  };
};

export const generateFilmsList = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};
