import Types from '../types';
import actionTypes from './actionTypes';
import { Actions, State } from './storeTypes';
import filters from '../constants/filters';
import sorting from '../constants/sorting';

const initialState: State = {
  tickets: {},
  isFetching: true,
  hasError: false,
  filter: filters.ALL,
  sorting: sorting.BY_PRICE_ASC
};

const reducer = (state: State = initialState, action: Actions.All): State => {
  switch (action.type) {
    case actionTypes.FETCH_TICKETS_REQUEST:
      return fetchTicketsRequest(state);

    case actionTypes.FETCH_TICKETS_SUCCESS:
      return fetchTicketsSuccess(state, action.payload);

    case actionTypes.FETCH_TICKETS_FAILURE:
      return fetchTicketsFailure(state);

    case actionTypes.SET_FILTER:
      return setFilter(state, action.payload);

    case actionTypes.SET_SORTING:
      return setSorting(state, action.payload);

    default:
      return state;
  }
};

function fetchTicketsRequest (state: State): State {
  return {
    ...state,
    isFetching: true,
    hasError: false
  };
}

function fetchTicketsSuccess (state: State, newTickets: Types.Tickets): State {
  return {
    ...state,
    tickets: {
      ...state.tickets,
      ...newTickets
    },
    isFetching: false,
    hasError: false
  };
}

function fetchTicketsFailure (state: State): State {
  return {
    ...state,
    isFetching: false,
    hasError: true
  };
}

function setFilter (state: State, filter: Types.Filter): State {
  return {
    ...state,
    filter
  };
}

function setSorting (state: State, sorting: string): State {
  return {
    ...state,
    sorting
  };
}

export default reducer;
