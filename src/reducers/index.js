import { combineReducers } from 'redux';

import ticketsReducer from './ticketsReducer';
import filterReducer from './filterReducer';
import sortingReducer from './sortingReducer';
import appearanceReducer from './appearanceReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  appliedFilters: filterReducer,
  appliedSorting: sortingReducer,
  appearance: appearanceReducer
});

export default rootReducer;
