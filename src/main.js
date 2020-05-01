import {createHeaderProfileTemplate} from "./components/profile";
import {createFiltersTemplate} from "./components/filter";
import {createNavSortTemplate} from "./components/sort";
import {createFilmsBoardTemplate} from "./components/film-board";
import {createFilmCardTemplate} from "./components/film-card";
import {createExtraFilmsTemplate} from "./components/extra-film";
// import {createFilmDetailsTemplate} from "./components/film-details";
import {createShowMoreBtnTemplate} from "./components/show-more-btn";
import {createFooterStatisticTemplate} from "./components/footer-stats";

import {generateFilmsList} from "./mocks/film";
import {generateUser} from "./mocks/profile";
import {generateFilters} from "./mocks/filter";
import filmsTotal from "./mocks/footer";

const MAIN_MOVIE_COUNT = 24;
const EXTRA_MOVIES_COUNT = 2;

const SHOWING_MOVIES_COUNT_ON_START = 5;
const SHOWING_MOVIES_COUNT_BY_BUTTON = 5;

const films = generateFilmsList(MAIN_MOVIE_COUNT);
const user = generateUser();
const filters = generateFilters();

// const {body: bodyElement} = document;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
// render(bodyElement, createFilmDetailsTemplate(films[0]));
const pageHeaderElement = document.querySelector(`.header`);
const pageMainElement = document.querySelector(`.main`);
const pageFooterElement = document.querySelector(`.footer`);
render(pageHeaderElement, createHeaderProfileTemplate(user));
render(pageMainElement, createFiltersTemplate(filters));
render(pageMainElement, createNavSortTemplate());
render(pageMainElement, createFilmsBoardTemplate());
const filmsElement = pageMainElement.querySelector(`.films`);
const filmMainContainerElement = filmsElement.querySelector(`.films-list__container`
);

let showingFilmsCount = SHOWING_MOVIES_COUNT_ON_START;

films
  .slice(0, showingFilmsCount)
  .forEach((film) => render(filmMainContainerElement, createFilmCardTemplate(film)));

render(filmMainContainerElement, createShowMoreBtnTemplate(), `afterend`);

const showMoreButton = filmsElement.querySelector(`.films-list__show-more`);

showMoreButton.addEventListener(`click`, function () {
  let prevFilmsShown = showingFilmsCount;
  showingFilmsCount += SHOWING_MOVIES_COUNT_BY_BUTTON;

  films
    .slice(prevFilmsShown, showingFilmsCount)
    .forEach((film) => render(filmMainContainerElement, createFilmCardTemplate(film)));

  if (showingFilmsCount >= films.length) {
    showMoreButton.remove();
  }
});

render(filmsElement, createExtraFilmsTemplate(`Top rated`));
render(filmsElement, createExtraFilmsTemplate(`Most commented`));

const extraFilmsContainers = filmsElement.querySelectorAll(`.films-list--extra .films-list__container`);

extraFilmsContainers.forEach((container) => {
  for (let i = 0; i < EXTRA_MOVIES_COUNT; i++) {
    render(container, createFilmCardTemplate(films[i]));
  }
});

render(pageFooterElement, createFooterStatisticTemplate(filmsTotal));
console.log(filmsTotal);
