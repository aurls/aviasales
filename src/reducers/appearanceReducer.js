import * as actionTypes from '../constants/actionTypes';

const initialState = {
  isFetching: true,
  hasError: false
};

const appearanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        hasError: action.payload
      };
    default:
      return state;
  }
};

export default appearanceReducer;
