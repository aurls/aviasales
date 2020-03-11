import * as actionTypes from '../constants/actionTypes';
import * as filters from '../constants/filters';

const initialState = [filters.ALL.type];

const filtersReducer = (state = initialState, action) => {
  if (action.type === actionTypes.SET_FILTER) {
    return setFilter(state, action.payload);
  }
  return state;
};

function setFilter (state, pressedFilter) {
  if (pressedFilter === filters.ALL.type) {
    if (state.includes(filters.ALL.type)) return [];
    return [filters.ALL.type];
  }

  const nextState = [];
  let areAllFiltersApplied = true;

  for (const filter in filters) {
    if (filter === filters.ALL.type) continue;

    if (filter !== pressedFilter) {
      if (state.includes(filters.ALL.type) || state.includes(filter)) {
        nextState.push(filter);
        continue;
      }
    }

    if (filter === pressedFilter) {
      if (!state.includes(filters.ALL.type) && !state.includes(filter)) {
        nextState.push(filter);
        continue;
      }
    }

    areAllFiltersApplied = false;
  }

  if (areAllFiltersApplied) return [filters.ALL.type];

  return nextState;
}

export default filtersReducer;
