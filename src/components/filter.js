import {getFirstCharUppercase} from "../utils";

const createFilterMarkup = (filter, isChecked) => {
  const {name, amount} = filter;
  const activeClass = isChecked ? `main-navigation__item--active` : ``;

  return `<a href="#${name === `all movies` ? `all` : name}" class="main-navigation__item ${activeClass}">${getFirstCharUppercase(name)} <span class="main-navigation__item-count">${amount}</span></a>`;
};

export const createFiltersTemplate = (filters) => {
  const filtersItems = filters.slice(0, -1);

  const filterMarkup = filtersItems.map((filter, index) => createFilterMarkup(filter, index === 0)).join(`\n`);

  return `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${filterMarkup}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`;
};
