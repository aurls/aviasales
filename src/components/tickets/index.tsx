import React from 'react';
import Types from '../../types';
import actions from '../../store/actions';

import Ticket from '../ticket';
import TicketsNotFound from '../tickets.not-found';
import TicketsProcessing from '../tickets.processing';
import ErrorMessage from '../error-message';
import './tickets.scss';

type Props = {
  tickets: Types.Ticket[]
  ticketsCount: number
  isFetching: boolean
  hasError: boolean
  setFilter: typeof actions.setFilter
}

const Tickets: React.FC<Props> = (props: Props) => {
  const {
    tickets,
    ticketsCount,
    isFetching,
    hasError,
    setFilter
  } = props;

  if (hasError) return <ErrorMessage />;
  if (isFetching && tickets.length === 0) return <TicketsProcessing />;

  if (tickets.length === 0) {
    return <TicketsNotFound
      setFilter={setFilter}
      ticketsCount={ticketsCount} />;
  }

  return (
    <div className="tickets">
      {
        tickets.map((ticket) =>
          <Ticket
            key={ticket.id}
            ticket={ticket} />)
      }
    </div>
  );
};

export default Tickets;
