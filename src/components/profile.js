export const createHeaderProfileTemplate = (profile) => {
  return `<section class="header__profile profile">
      <p class="profile__rating">${profile.status}</p>
      <img class="profile__avatar" src="images/${profile.avatar}" alt="Avatar" width="35" height="35">
    </section>`;
};
