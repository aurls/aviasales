import sortingReducer, { initialState } from '../../reducers/sortingReducer';
import * as actionTypes from '../../constants/actionTypes';
import * as sorting from '../../constants/sorting';

describe('Sorting reducer', () => {
  it('Set sorting', () => {
    const action = {
      type: actionTypes.SET_SORTING,
      payload: sorting.BY_PRICE_ASC
    };
    const expected = [sorting.BY_PRICE_ASC];

    expect(sortingReducer(initialState, action)).toEqual(expected);
  });

  it('Default', () => {
    expect(sortingReducer(initialState, {})).toEqual(initialState);
  });
});