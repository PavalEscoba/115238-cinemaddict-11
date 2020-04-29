import {DESCRIPTION, POSTERS, FILMS_NAMES, GENRES, DIRECTORS_NAMES, WRITERS_NAMES, ACTORS_NAMES, MONTHS} from "../consts";
import {getRandomIntegerNumber, getRandomArrayItem, getBool, getSeveralArrayItems} from "../utils";

// const defaultComment = {

// }

const generateDescription = (array) => {
  return array.slice(0, getRandomIntegerNumber(1, array.length - 1)).join(` `);
};

const generateComments = () => {
  const randomCount = +getRandomIntegerNumber(0, 50);
  return new Array(randomCount).fill(` `);
};

const generateRate = () => {
  const randomNumber = Math.random() * 10;
  return randomNumber.toFixed(1);
};

const generateFilm = () => {
  return {
    title: getRandomArrayItem(FILMS_NAMES),
    rating: generateRate(),
    year: getRandomIntegerNumber(1922, 1966),
    duration: `${getRandomIntegerNumber(0, 3)}h ${getRandomIntegerNumber(0, 60)}m`,
    genres: getBool() ? getSeveralArrayItems(GENRES, getRandomIntegerNumber(2, 5)) : getRandomArrayItem(GENRES),
    poster: getRandomArrayItem(POSTERS),
    description: generateDescription(DESCRIPTION),
    comments: generateComments(),
    isAddedToWatchList: getBool(),
    isWatched: getBool(),
    isFavorite: getBool(),
    age: getRandomIntegerNumber(0, 18),
    country: `USA`,
    originalTitle: getRandomArrayItem(FILMS_NAMES),
    directorName: getRandomArrayItem(DIRECTORS_NAMES),
    writerName: getSeveralArrayItems(WRITERS_NAMES, getRandomIntegerNumber(1, 3)),
    actorsNames: getSeveralArrayItems(ACTORS_NAMES, getRandomIntegerNumber(2, 5)),
    releaseDate: `${getRandomIntegerNumber(1, 28)} ${getRandomArrayItem(MONTHS)} ${getRandomIntegerNumber(1925, 1965)}`,

  };
};

export const generateFilmsList = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};
