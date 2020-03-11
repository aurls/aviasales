import * as actionTypes from '../constants/actionTypes';

export const setFetching = (value) => {
  return {
    type: actionTypes.SET_FETCHING,
    payload: value
  };
};

export const setError = (value) => {
  return {
    type: actionTypes.SET_ERROR,
    payload: value
  };
};
