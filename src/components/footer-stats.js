import {createElement} from "../utils";

const createFooterStatisticTemplate = (total) => {
  return (
    `<section class="footer__statistics">
        <p>${total.toLocaleString(`ru-RU`)} movies inside</p>
    </section>`
  );
};

export class FooterStatisticComponent {
  constructor(total) {
    this._total = total;
    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticTemplate(this._total);
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
