import Types from '../types';
import actionTypes from './actionTypes';
import { Actions, State } from './storeTypes';
import filters from '../services/filters';
import sortings from '../services/sortings';

const initialState: State = {
  tickets: {},
  isFetching: true,
  hasError: false,
  filters: [filters.ALL],
  sorting: sortings.BY_PRICE_ASC
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
  const updateFilters = (filters: Types.Filter[]) => ({
    ...state,
    filters
  });
  const currentFilters: Types.Filter[] = [...state.filters];

  if (filter === filters.ALL) {
    if (currentFilters.includes(filters.ALL)) {
      return updateFilters([]);
    }
    return updateFilters([filters.ALL]);
  }

  if (currentFilters.includes(filter)) {
    return updateFilters(
      [...currentFilters.filter((i) => i !== filter)]);
  }

  const filtersCount = Object.values(filters).length;
  const currentFiltersCount = Object.values(currentFilters).length;

  if (filtersCount - currentFiltersCount > 2) {
    return updateFilters(
      [...currentFilters.filter((i) => i !== filters.ALL), filter]);
  }

  return updateFilters([filters.ALL]);
}

function setSorting (state: State, sorting: Types.Sorting): State {
  return {
    ...state,
    sorting
  };
}

export default reducer;
