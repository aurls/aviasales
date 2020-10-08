import Types from '../types';
import actionTypes from './actionTypes';

export namespace Actions {
  export type FetchTicketsRequest = {
    type: typeof actionTypes.FETCH_TICKETS_REQUEST
  }

  export type FetchTicketsSuccess = {
    type: typeof actionTypes.FETCH_TICKETS_SUCCESS,
    payload: Types.Tickets
  }

  export type FetchTicketsFailure = {
    type: typeof actionTypes.FETCH_TICKETS_FAILURE
  }

  export type SetFetching = {
    type: typeof actionTypes.SET_FETCHING,
    payload: boolean
  }

  export type SetFilter = {
    type: typeof actionTypes.SET_FILTER,
    payload: Types.Filter
  }

  export type SetSorting = {
    type: typeof actionTypes.SET_SORTING,
    payload: Types.Sorting
  }

  export type All =
    | FetchTicketsRequest
    | FetchTicketsSuccess
    | FetchTicketsFailure
    | SetFetching
    | SetFilter
    | SetSorting
}

export type State = {
  tickets: Types.Tickets,
  isFetching: boolean,
  hasError: boolean,
  filters: Types.Filter[],
  sorting: Types.Sorting
}
