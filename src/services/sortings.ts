import Types from '../types';
import getTicketDuration from '../utils/getTicketDuration';

const BY_PRICE_ASC: Types.Sorting = {
  type: 'BY_PRICE_ASC',
  title: 'Самый дешёвый',
  fn: (prevPrice, nextPrice) => prevPrice - nextPrice
};

const BY_SPEED_ASC: Types.Sorting = {
  type: 'BY_SPEED_ASC',
  title: 'Самый быстрый',
  fn: (prevSpeed, nextSpeed) => prevSpeed - nextSpeed
};

export const sortTickets =
  (sorting: Types.Sorting) =>
    (prevTicket: Types.Ticket, nextTicket: Types.Ticket) => {
      switch (sorting) {
        case BY_PRICE_ASC:
          return BY_PRICE_ASC.fn(prevTicket.price, nextTicket.price);

        case BY_SPEED_ASC:
          return BY_SPEED_ASC.fn(
            getTicketDuration(prevTicket),
            getTicketDuration(nextTicket)
          );

        default:
          return 0;
      }
    };

export default {
  BY_PRICE_ASC,
  BY_SPEED_ASC
};
