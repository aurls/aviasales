import fetchMock from 'fetch-mock-jest';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actionTypes from '../../store/actionTypes';
import { fetchTickets } from '../../actions/tickets';
import Aviasales from '../../services/server';

describe('Tickets action creators', () => {
  const middlewares = [thunk];
  const storeMock = configureStore(middlewares);

  const searchId = '42';
  const searchIdResponse = {
    searchId
  };
  const ticketsResponse = {
    tickets: [],
    stop: true
  };

  const aviasales = new Aviasales();
  const searchUri = `${aviasales._apiBase}${aviasales._searchUri}`;
  const ticketsUri = `${aviasales._apiBase}${aviasales._ticketsUri}${searchId}`;

  afterEach(() => {
    fetchMock.mockClear();
    fetchMock.mockReset();
  });

  it('Fetch tickets', async () => {
    const store = storeMock({});
    fetchMock
      .get(searchUri, searchIdResponse)
      .get(ticketsUri, ticketsResponse);

    const expectedActions = [
      {
        type: actionTypes.SET_FETCHING,
        payload: true
      },
      {
        type: actionTypes.SAVE_TICKETS,
        payload: []
      },
      {
        type: actionTypes.SET_FETCHING,
        payload: false
      }
    ];

    await store.dispatch(fetchTickets());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Fetch tickets with 500', async () => {
    const store = storeMock({});
    fetchMock
      .get(searchUri, 500);

    const expectedActions = [
      {
        type: actionTypes.SET_FETCHING,
        payload: true
      },
      {
        type: actionTypes.SET_ERROR,
        payload: true
      },
      {
        type: actionTypes.SET_FETCHING,
        payload: false
      }
    ];

    await store.dispatch(fetchTickets());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
