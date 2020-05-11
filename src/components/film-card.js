import {getShortDescription, createElement} from "../utils";

const createFilmCardTemplate = (film) => {
  const {title, rating, year, duration, genres, poster, description, comments, isAddedToWatchList, isWatched, isFavorite} = film;

  const addButtonActiveClass = isAddedToWatchList ? `film-card__controls-item--active` : ``;
  const watchedButtonActiveClass = isWatched ? `film-card__controls-item--active` : ``;
  const favoriteButtonActiveClass = isFavorite ? `film-card__controls-item--active` : ``;
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genres[0]}</span>
        </p>
        <img src="./images/posters/${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${getShortDescription(description)}</p>
        <a class="film-card__comments">${comments.length} ${comments.length <= 1 ? `comment` : `comments`}</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item ${addButtonActiveClass} button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item ${watchedButtonActiveClass} button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item ${favoriteButtonActiveClass} button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>`
  );
};

export default class FilmCardComponent {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
