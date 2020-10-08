import actionTypes from '../actionTypes';
import filters from '../../services/filters';
import sortings from '../../services/sortings';
import actions from '../actions';
import mockedTickets from './mockedTicket';

describe('Action creators', () => {
  it('fetchTicketsRequest', () => {
    const action = {
      type: actionTypes.FETCH_TICKETS_REQUEST
    };
    expect(actions.fetchTicketsRequest()).toEqual(action);
  });

  it('fetchTicketsSuccess', () => {
    const action = {
      type: actionTypes.FETCH_TICKETS_SUCCESS,
      payload: mockedTickets
    };
    expect(actions.fetchTicketsSuccess(mockedTickets)).toEqual(action);
  });

  it('fetchTicketsFailure', () => {
    const action = {
      type: actionTypes.FETCH_TICKETS_FAILURE
    };
    expect(actions.fetchTicketsFailure()).toEqual(action);
  });

  it('setFetching', () => {
    const action = {
      type: actionTypes.SET_FETCHING,
      payload: false
    };
    expect(actions.setFetching(false)).toEqual(action);
  });

  it('setFilter', () => {
    const action = {
      type: actionTypes.SET_FILTER,
      payload: filters.ONE_TRANSFER
    };
    expect(actions.setFilter(filters.ONE_TRANSFER)).toEqual(action);
  });

  it('setSorting', () => {
    const action = {
      type: actionTypes.SET_SORTING,
      payload: sortings.BY_SPEED_ASC
    };
    expect(actions.setSorting(sortings.BY_SPEED_ASC)).toEqual(action);
  });
});
