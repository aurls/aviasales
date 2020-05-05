import * as actionTypes from '../../constants/actionTypes';
import { setFilter } from '../../actions/filters';
import * as filters from '../../constants/filters';

describe('Filters action creators', () => {
  it('Set filter', () => {
    const newFilter = filters.ONE_TRANSFER;
    const expectedAction = {
      type: actionTypes.SET_FILTER,
      payload: newFilter
    };

    expect(setFilter(newFilter)).toEqual(expectedAction);
  });
});
