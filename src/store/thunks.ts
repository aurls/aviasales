import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from './storeTypes';
import actions from './actions';
import Server from '../services/server';

const {
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsFailure,
  setFetching
} = actions;

const fetchTickets =
  (): ThunkAction<void, State, unknown, Action> => async (dispatch: Dispatch) => {
    dispatch(fetchTicketsRequest());
    const server: Server = new Server();
    let searchId: string;

    const sendRequest = async () => {
      try {
        const { tickets, isStop } = await server.getTickets(searchId);
        dispatch(fetchTicketsSuccess(tickets));
        isStop
          ? dispatch(setFetching(false))
          : await sendRequest();
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
