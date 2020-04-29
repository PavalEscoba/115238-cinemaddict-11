import {DESCRIPTION, POSTERS, FILMS_NAMES, GENRES, DIRECTORS_NAMES, WRITERS_NAMES, ACTORS_NAMES, MONTHS, COMMENT_EMOTIONS, COMMENT_TEXTS, COMMENT_AUTHORS, COMMENT_DATES} from "../consts";
import {getRandomIntegerNumber, getRandomArrayItem, getBool, getSeveralArrayItems} from "../utils";

const generateCommentObject = () => {
  return {
    text: getRandomArrayItem(COMMENT_TEXTS),
    emotion: getRandomArrayItem(COMMENT_EMOTIONS),
    author: getRandomArrayItem(COMMENT_AUTHORS),
    date: getRandomArrayItem(COMMENT_DATES),
  };
};

const generateComments = () => {
  const randomCount = new Array(getRandomIntegerNumber(0, 5)).fill(``);
  return randomCount.map(generateCommentObject);
};

const generateDescription = (array) => {
  return array.slice(0, getRandomIntegerNumber(1, array.length - 1)).join(` `);
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
    genres: getBool() ? getSeveralArrayItems(GENRES, getRandomIntegerNumber(2, 5)) : [getRandomArrayItem(GENRES)],
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
    writerNames: getSeveralArrayItems(WRITERS_NAMES, getRandomIntegerNumber(1, 3)),
    actorsNames: getSeveralArrayItems(ACTORS_NAMES, getRandomIntegerNumber(2, 5)),
    releaseDate: `${getRandomIntegerNumber(1, 28)} ${getRandomArrayItem(MONTHS)} ${getRandomIntegerNumber(1925, 1965)}`,

  };
};

export const generateFilmsList = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};
