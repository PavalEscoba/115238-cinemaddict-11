
import {createHeaderProfileTemplate} from "./components/profile";
import {createNavStatsTemplate} from "./components/stats";
import {createNavSortTemplate} from "./components/sort";
import {createFilmsBoardTemplate} from "./components/film-board";
import {createFilmCardTemplate} from "./components/film-card";
import {createExtraFilmsTemplate} from "./components/extra-film";
// import {createFilmDetailsTemplate} from "./components/film-details";
import {createShowMoreBtnTemplate} from "./components/show-more-btn";
import {createFooterStatisticTemplate} from "./components/footer-stats";

import {generateFilmsList} from "./mocks/film";

const MAIN_MOVIE_COUNT = 25;
const EXTRA_MOVIES_COUNT = 2;

const SHOWING_MOVIES_COUNT_ON_START = 8;
const SHOWING_MOVIES_COUNT_BY_BUTTON = 8;

const films = generateFilmsList(MAIN_MOVIE_COUNT);

// const {body: bodyElement} = document;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};
// render(bodyElement, createFilmDetailsTemplate());
const pageHeaderElement = document.querySelector(`.header`);
const pageMainElement = document.querySelector(`.main`);
const pageFooterElement = document.querySelector(`.footer`);
render(pageHeaderElement, createHeaderProfileTemplate());
render(pageMainElement, createNavStatsTemplate());
render(pageMainElement, createNavSortTemplate());
render(pageMainElement, createFilmsBoardTemplate());
const filmsElement = pageMainElement.querySelector(`.films`);
const filmMainContainerElement = filmsElement.querySelector(`.films-list__container`
);

let showingFilmsCount = SHOWING_MOVIES_COUNT_ON_START;

films
  .slice(1, showingFilmsCount)
  .forEach((film) => render(filmMainContainerElement, createFilmCardTemplate(film)));

render(filmMainContainerElement, createShowMoreBtnTemplate(), `afterend`);

render(filmsElement, createExtraFilmsTemplate(`Top rated`));
render(filmsElement, createExtraFilmsTemplate(`Most commented`));

const extraFilmsContainers = filmsElement.querySelectorAll(`.films-list--extra .films-list__container`);

extraFilmsContainers.forEach((container) => {
  for (let i = 0; i < EXTRA_MOVIES_COUNT; i++) {
    render(container, createFilmCardTemplate(films[i]));
  }
});

render(pageFooterElement, createFooterStatisticTemplate());
