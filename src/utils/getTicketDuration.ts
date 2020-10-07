import Types from '../types';

const getTicketDuration = (ticket: Types.Ticket): number => {
  return ticket.segments.reduce((acc, segment) =>
    acc + segment.duration, 0);
};

export default getTicketDuration;
