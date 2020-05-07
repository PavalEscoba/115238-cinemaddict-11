export const getRandomIntegerNumber = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

export const getRandomArrayItem = (array) => {
  const itemPosition = getRandomIntegerNumber(0, array.length - 1);

  return array[itemPosition];
};

export const getBool = () => {
  return Math.random() > 0.5;
};

export const getShortDescription = (desc) => {
  if (desc.length > 140) {
    return desc.slice(0, 141) + `...`;
  }
  return desc;
};

export const getSeveralArrayItems = (array, count) => {
  let newArray = [];
  while (count) {
    newArray.push(getRandomArrayItem(array));
    count--;
  }
  return newArray;
};

export const getFirstCharUppercase = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const render = (container, element, position) => {
  switch (position) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

