// Знайсці Хэдэр і ўставіць Профіль.
// Знайсці мэйн уставіць фільтры
// Знайсці Футэр і уставіць Тотал.

import HeaderProfileComponent from "./components/profile";
import FilterComponent from "./components/filter";
import SortComponent from "./components/sort";
import FilmsBoardComponent from "./components/film-board";
import FilmsListComponent from "./components/films-list";
import FilmCardComponent from "./components/film-card";
// import {createExtraFilmsTemplate} from "./components/extra-film";
// import {createFilmDetailsTemplate} from "./components/film-details";
import ShowMoreBtnComponent from "./components/show-more-btn";
import {FooterStatisticComponent} from "./components/footer-stats";

import {generateFilmsList} from "./mocks/film";
import {generateUser} from "./mocks/profile";
import {generateFilters} from "./mocks/filter";
import filmsTotal from "./mocks/footer";

import {render, RenderPosition} from './utils';

const MAIN_MOVIE_COUNT = 14;
// const EXTRA_MOVIES_COUNT = 2;

const SHOWING_MOVIES_COUNT_ON_START = 5;
const SHOWING_MOVIES_COUNT_BY_BUTTON = 5;

const films = generateFilmsList(MAIN_MOVIE_COUNT);
const filters = generateFilters();

const user = generateUser();
const pageHeaderElement = document.querySelector(`.header`);
render(pageHeaderElement, new HeaderProfileComponent(user).getElement(), RenderPosition.BEFOREEND);

const pageMainElement = document.querySelector(`.main`);
render(pageMainElement, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);
render(pageMainElement, new SortComponent().getElement(), RenderPosition.BEFOREEND);


const pageFooterStats = document.querySelector(`.footer`);
render(pageFooterStats, new FooterStatisticComponent(filmsTotal).getElement(), RenderPosition.BEFOREEND);

const renderFilm = (board, film) => {
  const filmCard = new FilmCardComponent(film);
  render(board, filmCard.getElement(), RenderPosition.BEFOREEND);
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

const filmsContentElement = new FilmsBoardComponent();
render(pageMainElement, filmsContentElement.getElement(), RenderPosition.BEFOREEND);

renderFilmBoard(filmsContentElement, films);

// const {body: bodyElement} = document;

// const render = (container, template, place = `beforeend`) => {
//   container.insertAdjacentHTML(place, template);
// };
// render(bodyElement, createFilmDetailsTemplate(films[0]));
// const pageMainElement = document.querySelector(`.main`);
// const pageFooterElement = document.querySelector(`.footer`);
// render(pageHeaderElement, createHeaderProfileTemplate(user));
// render(pageMainElement, createFiltersTemplate(filters));
// render(pageMainElement, createNavSortTemplate());
// render(pageMainElement, createFilmsBoardTemplate());
// const filmsElement = pageMainElement.querySelector(`.films`);
// const filmMainContainerElement = filmsElement.querySelector(`.films-list__container`
// );

// let showingFilmsCount = SHOWING_MOVIES_COUNT_ON_START;

// films
//   .slice(0, showingFilmsCount)
//   .forEach((film) => render(filmMainContainerElement, createFilmCardTemplate(film)));

// render(filmMainContainerElement, createShowMoreBtnTemplate(), `afterend`);

// const showMoreButton = filmsElement.querySelector(`.films-list__show-more`);

// showMoreButton.addEventListener(`click`, function () {
//   let prevFilmsShown = showingFilmsCount;
//   showingFilmsCount += SHOWING_MOVIES_COUNT_BY_BUTTON;

//   films
//     .slice(prevFilmsShown, showingFilmsCount)
//     .forEach((film) => render(filmMainContainerElement, createFilmCardTemplate(film)));

//   if (showingFilmsCount >= films.length) {
//     showMoreButton.remove();
//   }
// });

// render(filmsElement, createExtraFilmsTemplate(`Top rated`));
// render(filmsElement, createExtraFilmsTemplate(`Most commented`));

// const extraFilmsContainers = filmsElement.querySelectorAll(`.films-list--extra .films-list__container`);

// extraFilmsContainers.forEach((container) => {
//   for (let i = 0; i < EXTRA_MOVIES_COUNT; i++) {
//     render(container, createFilmCardTemplate(films[i]));
//   }
// });

// render(pageFooterElement, createFooterStatisticTemplate(filmsTotal));
