import * as actionTypes from '../constants/actionTypes';
import { appearance } from './index';
import Aviasales from '../services/aviasales';

const saveTickets = (tickets) => {
  return {
    type: actionTypes.SAVE_TICKETS,
    payload: tickets
  };
};

export const fetchTickets = () => async (dispatch) => {
  dispatch(appearance.setFetching(true));

  const aviasales = new Aviasales();
  let searchId = '';

  const fetchTicketsPiece = async () => {
    try {
      const response = await aviasales.getTickets(searchId);
      dispatch(saveTickets(response.tickets));
      if (!response.stop) await fetchTicketsPiece();
    } catch (err) {
      await fetchTicketsPiece();
    }
  };

  try {
    searchId = await aviasales.getSearchId();
    await fetchTicketsPiece();
  } catch (err) {
    dispatch(appearance.setError(true));
  } finally {
    dispatch(appearance.setFetching(false));
  }
};
