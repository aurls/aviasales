import * as actionTypes from '../constants/actionTypes';

export const setFilter = (filter) => {
  return {
    type: actionTypes.SET_FILTER,
    payload: filter
  };
};
