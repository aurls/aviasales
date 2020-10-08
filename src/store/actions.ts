import Types from '../types';
import { Actions } from './storeTypes';
import actionTypes from './actionTypes';

const fetchTicketsRequest = (): Actions.FetchTicketsRequest => ({
  type: actionTypes.FETCH_TICKETS_REQUEST
});

const fetchTicketsSuccess = (tickets: Types.Tickets): Actions.FetchTicketsSuccess => ({
  type: actionTypes.FETCH_TICKETS_SUCCESS,
  payload: tickets
});

const fetchTicketsFailure = (): Actions.FetchTicketsFailure => ({
  type: actionTypes.FETCH_TICKETS_FAILURE
});

const setFetching = (isFetching: boolean): Actions.SetFetching => ({
  type: actionTypes.SET_FETCHING,
  payload: isFetching
});

const setFilter = (filter: Types.Filter): Actions.SetFilter => ({
  type: actionTypes.SET_FILTER,
  payload: filter
});

const setSorting = (sorting: Types.Sorting): Actions.SetSorting => ({
  type: actionTypes.SET_SORTING,
  payload: sorting
});

export default {
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsFailure,
  setFetching,
  setFilter,
  setSorting
};
