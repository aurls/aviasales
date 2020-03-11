import * as actionTypes from '../constants/actionTypes';

export const setSorting = (sorting) => {
  return {
    type: actionTypes.SET_SORTING,
    payload: sorting
  };
};
