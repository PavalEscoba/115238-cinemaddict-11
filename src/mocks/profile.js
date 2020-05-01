import {PROFILE_STATUS} from '../consts';
import {getRandomArrayItem} from '../utils';

export const generateUser = () => {
  return {
    status: getRandomArrayItem(PROFILE_STATUS),
    avatar: `bitmap@2x.png`
  };
};
