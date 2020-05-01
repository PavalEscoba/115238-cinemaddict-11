const filterNames = [`all movies`, `watchlist`, `history`, `favorites`, `stats`];

export const generateFilters = () => {
  return filterNames.map((filter) => {
    return {
      name: filter,
      amount: Math.floor(Math.random() * 30)
    };
  });
};
