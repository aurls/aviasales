import * as actionTypes from '../constants/actionTypes';

export const saveTickets = (tickets) => {
  return {
    type: actionTypes.SAVE_TICKETS,
    payload: tickets
  };
};
