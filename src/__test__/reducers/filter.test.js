import filterReducer, { initialState } from '../../reducers/filterReducer';
import * as actionTypes from '../../store/actionTypes';
import * as filters from '../../constants/filters';

describe('Filter reducer', () => {
  describe('All filters are on', () => {
    const allFiltersAreOn = [filters.ALL.type];

    it('Press filter ALL TRANSFERS', () => {
      const action = {
        type: actionTypes.SET_FILTER,
        payload: filters.ALL.type
      };
      const expected = [];

      expect(filterReducer(allFiltersAreOn, action)).toEqual(expected);
    });

    it('Press filter ONE TRANSFER', () => {
      const action = {
        type: actionTypes.SET_FILTER,
        payload: filters.ONE_TRANSFER.type
      };
      const expected = [
        filters.NO_TRANSFERS.type,
        filters.TWO_TRANSFERS.type,
        filters.THREE_TRANSFERS.type
      ];

      expect(filterReducer(allFiltersAreOn, action)).toEqual(expected);
    });
  });

  describe('All filters are off', () => {
    const allFiltersAreOff = [];

    it('Press filter ALL TRANSFERS', () => {
      const action = {
        type: actionTypes.SET_FILTER,
        payload: filters.ALL.type
      };
      const expected = [filters.ALL.type];

      expect(filterReducer(allFiltersAreOff, action)).toEqual(expected);
    });

    it('Press filter ONE TRANSFER', () => {
      const action = {
        type: actionTypes.SET_FILTER,
        payload: filters.ONE_TRANSFER.type
      };
      const expected = [filters.ONE_TRANSFER.type];

      expect(filterReducer(allFiltersAreOff, action)).toEqual(expected);
    });
  });

  describe('All filters are on, except one', () => {
    const pressedFilter = filters.ONE_TRANSFER.type;
    const currentState = [
      filters.NO_TRANSFERS.type,
      filters.TWO_TRANSFERS.type,
      filters.THREE_TRANSFERS.type
    ];

    it('Press filter ONE TRANSFER', () => {
      const action = {
        type: actionTypes.SET_FILTER,
        payload: pressedFilter
      };
      const expected = [filters.ALL.type];

      expect(filterReducer(currentState, action)).toEqual(expected);
    });
  });

  it('Default', () => {
    expect(filterReducer(initialState, {})).toEqual(initialState);
  });
});
