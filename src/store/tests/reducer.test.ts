import actionTypes from '../actionTypes';
import reducer, { initialState } from '../reducer';
import filters from '../../services/filters';
import sortings from '../../services/sortings';
import mockedTicket from './mockedTicket';

describe('Reducer', () => {
  describe('Fetching tickets', () => {
    it('fetchTicketsRequest', () => {
      const action = {
        type: actionTypes.FETCH_TICKETS_REQUEST
      };
      const expectedState = {
        ...initialState,
        isFetching: true,
        hasError: false
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('fetchTicketsSuccess', () => {
      const mockedTickets = {
        [mockedTicket.id]: mockedTicket
      };
      const action = {
        type: actionTypes.FETCH_TICKETS_SUCCESS,
        payload: mockedTickets
      };
      const expectedState = {
        ...initialState,
        tickets: mockedTickets,
        hasError: false
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('fetchTicketsFailure', () => {
      const action = {
        type: actionTypes.FETCH_TICKETS_FAILURE
      };
      const expectedState = {
        ...initialState,
        isFetching: false,
        hasError: true
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('setFetching', () => {
      const action = {
        type: actionTypes.SET_FETCHING,
        payload: false
      };
      const expectedState = {
        ...initialState,
        isFetching: false
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('Filters', () => {
    it('setFilter, when all filters are on', () => {
      const state = {
        ...initialState,
        filters: [filters.ALL]
      };
      const action1 = {
        type: actionTypes.SET_FILTER,
        payload: filters.ALL
      };
      const expectedState1 = {
        ...initialState,
        filters: []
      };
      const action2 = {
        type: actionTypes.SET_FILTER,
        payload: filters.ONE_TRANSFER
      };
      const expectedState2 = {
        ...initialState,
        filters: [...Object.values(filters)
          .filter((f) => f !== filters.ALL && f !== filters.ONE_TRANSFER)]
      };

      expect(reducer(state, action1)).toEqual(expectedState1);
      expect(reducer(state, action2)).toEqual(expectedState2);
    });

    it('setFilter, when all filters are off', () => {
      const state = {
        ...initialState,
        filters: []
      };
      const action1 = {
        type: actionTypes.SET_FILTER,
        payload: filters.ONE_TRANSFER
      };
      const expectedState1 = {
        ...initialState,
        filters: [filters.ONE_TRANSFER]
      };
      const action2 = {
        type: actionTypes.SET_FILTER,
        payload: filters.ALL
      };
      const expectedState2 = {
        ...initialState,
        filters: [filters.ALL]
      };

      expect(reducer(state, action1)).toEqual(expectedState1);
      expect(reducer(state, action2)).toEqual(expectedState2);
    });

    it('setFilter, when all filters are on, except one', () => {
      const state = {
        ...initialState,
        filters: [...Object.values(filters)
          .filter((f) => f !== filters.ALL && f !== filters.ONE_TRANSFER)]
      };
      const action = {
        type: actionTypes.SET_FILTER,
        payload: filters.ONE_TRANSFER
      };
      const expectedState = {
        ...initialState,
        filters: [filters.ALL]
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });

    it('setFilter, when pressed filter is on', () => {
      const state = {
        ...initialState,
        filters: [filters.ONE_TRANSFER]
      };
      const action = {
        type: actionTypes.SET_FILTER,
        payload: filters.ONE_TRANSFER
      };
      const expectedState = {
        ...initialState,
        filters: []
      };

      expect(reducer(state, action)).toEqual(expectedState);
    });
  });

  describe('Sorting', () => {
    it('setSorting', () => {
      const action = {
        type: actionTypes.SET_SORTING,
        payload: sortings.BY_PRICE_ASC
      };
      const expectedState = {
        ...initialState,
        sorting: sortings.BY_PRICE_ASC
      };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
