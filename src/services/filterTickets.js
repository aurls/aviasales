import * as filters from '../constants/filters';

function filterTickets (tickets, appliedFilters) {
  if (appliedFilters.includes(filters.ALL.type)) return tickets;
  if (appliedFilters.length === 0) return [];

  return tickets.reduce((acc, ticket) => {
    if (isTicketFiltered(ticket, appliedFilters)) return [...acc, ticket];
    return acc;
  }, []);
}

function isTicketFiltered (ticket, appliedFilters) {
  for (const segment of ticket.segments) {
    for (const appliedFilter of appliedFilters) {
      if (filters[appliedFilter]
        .callback(segment.stops.length)) return true;
    }
  }
  return false;
}

export default filterTickets;
