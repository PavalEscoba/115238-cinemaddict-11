import {createElement} from "../utils";

const createHeaderProfileTemplate = (profile) => {
  const {status, avatar} = profile;
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${status}</p>
      <img class="profile__avatar" src="images/${avatar}" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export default class HeaderProfileComponent {
  constructor(user) {
    this._user = user;
    this._element = null;
  }

  getTemplate() {
    return createHeaderProfileTemplate(this._user);
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
