import { combineReducers } from 'redux';

import ticketsReducer from './ticketsReducer';
import filtersReducer from './filtersReducer';
import sortingReducer from './sortingReducer';
import appearanceReducer from './appearanceReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  appliedFilters: filtersReducer,
  appliedSorting: sortingReducer,
  appearance: appearanceReducer
});

export default rootReducer;
