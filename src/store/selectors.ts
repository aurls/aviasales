import { createSelector } from 'reselect';
import Types from '../types';
import { State } from './storeTypes';
import filters, { filterTickets } from '../services/filters';
import { sortTickets } from '../services/sortings';

const getAllTickets = (state: State): Types.Tickets => state.tickets;
const getTicketsCount = (state: State): number => Object.values(state.tickets).length;
const getFilters = (state: State): Types.Filter[] => state.filters;
const getSorting = (state: State): Types.Sorting => state.sorting;
const getIsFetching = (state: State): boolean => state.isFetching;
const getHasError = (state: State): boolean => state.hasError;

const getTickets = createSelector(
  getAllTickets,
  getFilters,
  getSorting,
  (ticketsAsObj: Types.Tickets, currentFilters: Types.Filter[], sorting: Types.Sorting):
  Types.Ticket[] => {
    const tickets = Object.values(ticketsAsObj);

    if (currentFilters.length === 0) return [];
    if (currentFilters.includes(filters.ALL)) {
      return tickets
        .sort(sortTickets(sorting))
        .slice(0, 6);
    }

    const filteredTickets = filterTickets(tickets, currentFilters);

    return filteredTickets
      .sort(sortTickets(sorting))
      .slice(0, 6);
  }
);

export default {
  getTickets,
  getTicketsCount,
  getFilters,
  getSorting,
  getIsFetching,
  getHasError
};
