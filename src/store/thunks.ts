import { Dispatch } from 'redux';
import actions from './actions';
import Server from '../services/server';

const {
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsFailure
} = actions;

const fetchTickets = () => async (dispatch: Dispatch) => {
  dispatch(fetchTicketsRequest());
  const server: Server = new Server();
  let searchId: string;

  const sendRequest = async () => {
    try {
      const { tickets, isStop } = await server.getTickets(searchId);
      dispatch(fetchTicketsSuccess(tickets));
      if (!isStop) await sendRequest();
    } catch (error) {
      await sendRequest();
    }
  };

  try {
    searchId = await server.getSearchId();
    await sendRequest();
  } catch (error) {
    dispatch(fetchTicketsFailure());
  }
};

export default {
  fetchTickets
};
