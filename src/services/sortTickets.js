import * as sorting from '../constants/sorting';

function sortTickets (tickets, appliedSorting) {
  return tickets.sort((prevTicket, nextTicket) => {
    switch (appliedSorting[0]) {
      case sorting.BY_PRICE_ASC.type:
        return sorting.BY_PRICE_ASC.callback(
          prevTicket.price,
          nextTicket.price);
      case sorting.BY_SPEED_ASC.type:
        return sorting.BY_SPEED_ASC.callback(
          getTicketDuration(prevTicket),
          getTicketDuration(nextTicket));
      default:
        return 0;
    }
  });
}

function getTicketDuration (ticket) {
  return ticket.segments.reduce((acc, segment) =>
    acc + segment.duration, 0);
}

export default sortTickets;
