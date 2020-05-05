import * as actionTypes from '../constants/actionTypes';
import * as sorting from '../constants/sorting';

export const initialState = setSorting(sorting.BY_PRICE_ASC.type);

const sortingReducer = (state = initialState, action) => {
  if (action.type === actionTypes.SET_SORTING) {
    return setSorting(action.payload);
  }
  return state;
};

function setSorting (sorting) {
  return [sorting];
}

export default sortingReducer;
