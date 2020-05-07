import {createElement} from "../utils";

const createHeaderProfileTemplate = (profile) => {
  return `<section class="header__profile profile">
      <p class="profile__rating">${profile.status}</p>
      <img class="profile__avatar" src="images/${profile.avatar}" alt="Avatar" width="35" height="35">
    </section>`;
};

export class HeaderProfileComponent {
  constructor(profile) {
    this._profile = profile;
    this._element = null;
  }

  getTemplate() {
    return createHeaderProfileTemplate(this._profile);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement();
    }
  }

  removeElement() {
    this._element = null;
  }
}
