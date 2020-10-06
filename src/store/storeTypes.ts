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

  export type SetFilter = {
    type: typeof actionTypes.SET_FILTER,
    payload: Types.Filter
  }

  export type SetSorting = {
    type: typeof actionTypes.SET_SORTING,
    payload: string
  }

  export type All =
    | FetchTicketsRequest
    | FetchTicketsSuccess
    | FetchTicketsFailure
    | SetFilter
    | SetSorting
}

export type State = {
  tickets: Types.Tickets,
  isFetching: boolean,
  hasError: boolean,
  filter: Types.Filter,
  sorting: string
}
