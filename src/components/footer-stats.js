export const createFooterStatisticTemplate = (total) => {
  return `<section class="footer__statistics">
        <p>${total.toLocaleString(`ru-RU`)} movies inside</p>
      </section>`;
};
