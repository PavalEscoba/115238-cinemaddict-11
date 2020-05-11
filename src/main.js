import HeaderProfileComponent from "./components/profile";
import FilterComponent from "./components/filter";
import SortComponent from "./components/sort";
import FilmsBoardComponent from "./components/film-board";
import FilmsListComponent from "./components/films-list";
import FilmCardComponent from "./components/film-card";
import ExtraFilmComponent from "./components/extra-film";
import FilmDetailsComponent from "./components/film-details";
import ShowMoreBtnComponent from "./components/show-more-btn";
import {FooterStatisticComponent} from "./components/footer-stats";

import {generateFilmsList} from "./mocks/film";
import {generateUser} from "./mocks/profile";
import {generateFilters} from "./mocks/filter";
import filmsTotal from "./mocks/footer";

import {render, RenderPosition} from './utils';

const MAIN_MOVIE_COUNT = 14;
const SHOWING_MOVIES_COUNT_ON_START = 5;
const SHOWING_MOVIES_COUNT_BY_BUTTON = 5;

const films = generateFilmsList(MAIN_MOVIE_COUNT);
const filters = generateFilters();
const topRatedFilms = films.slice().sort((a, b)=> b.rating - a.rating).slice(0, 2);
const mostCommentedFilms = films.slice().sort((a, b) => b.comments.length - a.comments.length).slice(0, 2);
const {body: bodyElement} = document;

const user = generateUser();
const pageHeaderElement = document.querySelector(`.header`);
render(pageHeaderElement, new HeaderProfileComponent(user).getElement(), RenderPosition.BEFOREEND);

const pageMainElement = document.querySelector(`.main`);
render(pageMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);
render(pageMainElement, new SortComponent().getElement(), RenderPosition.BEFOREEND);


const pageFooterStats = document.querySelector(`.footer`);
render(pageFooterStats, new FooterStatisticComponent(filmsTotal).getElement(), RenderPosition.BEFOREEND);

const renderFilm = (board, film) => {
  const filmCardComponent = new FilmCardComponent(film);
  const filmDetailsCardComponent = new FilmDetailsComponent(film);
  render(board, filmCardComponent.getElement(), RenderPosition.BEFOREEND);
  const cardPosterElement = filmCardComponent.getElement().querySelector(`.film-card__poster`);
  const cardCommentElement = filmCardComponent.getElement().querySelector(`.film-card__comments`);
  const cardTitleElement = filmCardComponent.getElement().querySelector(`.film-card__title`);
  const popupCloseIconElement = filmDetailsCardComponent.getElement().querySelector(`.film-details__close-btn`);

  const showPopup = (evt) => {
    evt.preventDefault();
    bodyElement.appendChild(filmDetailsCardComponent.getElement());
  };

  const hidePopup = (evt) => {
    evt.preventDefault();
    bodyElement.removeChild(filmDetailsCardComponent.getElement());
  };

  [cardPosterElement, cardCommentElement, cardTitleElement].forEach((elem) => {
    elem.addEventListener(`click`, (evt) => {
      showPopup(evt);
    });
  });

  popupCloseIconElement.addEventListener(`click`, (evt) => {
    hidePopup(evt);
  });
};

const renderFilmBoard = (filmsBoard, movies) => {
  render(filmsBoard.getElement(), new FilmsListComponent().getElement(), RenderPosition.BEFOREEND);

  const filmsListElement = filmsBoard.getElement().querySelector(`.films-list`);
  const filmsListContainerElement = filmsBoard.getElement().querySelector(`.films-list .films-list__container`);

  let showingFilmsCount = SHOWING_MOVIES_COUNT_ON_START;
  movies.slice(0, showingFilmsCount)
    .forEach((movie) => renderFilm(filmsListContainerElement, movie));

  const showMoreButtonComponent = new ShowMoreBtnComponent();
  render(filmsListElement, showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  showMoreButtonComponent.getElement().addEventListener(`click`, () => {
    const prevFilmsCount = showingFilmsCount;
    showingFilmsCount = showingFilmsCount + SHOWING_MOVIES_COUNT_BY_BUTTON;

    films.slice(prevFilmsCount, showingFilmsCount)
      .forEach((film) => renderFilm(filmsListContainerElement, film));

    if (showingFilmsCount >= films.length) {
      showMoreButtonComponent.getElement().remove();
      showMoreButtonComponent.removeElement();
    }
  });
};

const renderExtraFilmBoard = (filmsBoard, movies, title) => {
  const extraMoviesComponent = new ExtraFilmComponent(title);
  render(filmsBoard.getElement(), extraMoviesComponent.getElement(), RenderPosition.BEFOREEND);

  const board = extraMoviesComponent.getElement().querySelector(`.films-list__container`);

  movies.forEach((movie)=> renderFilm(board, movie));
};

const filmsContentElement = new FilmsBoardComponent();
render(pageMainElement, filmsContentElement.getElement(), RenderPosition.BEFOREEND);

renderFilmBoard(filmsContentElement, films);
renderExtraFilmBoard(filmsContentElement, topRatedFilms, `Top rated`);
renderExtraFilmBoard(filmsContentElement, mostCommentedFilms, `Most commented`);
