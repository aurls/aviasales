import React from 'react';
import Types from '../../types';
import Ticket from '../ticket';
import TicketsNotFound from '../tickets';
import TicketsAreProcessing from '../tickets';
import ErrorMessage from '../error-message';
import './tickets.scss';

type Props = {
  tickets: Types.Tickets
}

const Tickets: React.FC<Props> = (props: Props) => {
  const {
    tickets,
    isFetching,
    hasError,
    setFilter } = props;

  if (hasError) return <ErrorMessage />;
  // if (isFetching && tickets.length === 0) return <TicketsAreProcessing />;

  // const filteredTickets = filterTickets(tickets, appliedFilters);
  // if (filteredTickets.length === 0) {
  //   return <tickets.not-found
  //     ticketsCount={tickets.length}
  //     setFilter={setFilter} />;
  // }
  //
  // const sortedTickets = sortTickets(filteredTickets, appliedSorting);
  // const preparedTickets = sortedTickets.slice(0, 6);

  return (
    <div className="tickets">
      {
        Object.values(tickets)
          .map((ticket) =>
            <Ticket
              key={ticket.id}
              ticket={ticket} />)
      }
    </div>
  );
}

export default Tickets;
