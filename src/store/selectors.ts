import { createSelector } from 'reselect';
import Types from '../types';
import { State } from './storeTypes';
import filters from '../services/filters';
import filterTickets from '../services/filterTickets';
import sortTickets from '../services/sortTickets';

const getAllTickets = (state: State): Types.Tickets => state.tickets;
const getFilter = (state: State): Types.Filter => state.filter;
const getSorting = (state: State): string => state.sorting;
const getIsFetching = (state: State): boolean => state.isFetching;
const getHasError = (state: State): boolean => state.hasError;

const getTickets = createSelector(
  getAllTickets,
  getFilter,
  getSorting,
  (tickets: Types.Tickets, filter: Types.Filter, sorting: string): Types.Tickets => {
    return tickets;
  }
);

export default {
  getTickets,
  getFilter,
  getSorting,
  getIsFetching,
  getHasError
};
