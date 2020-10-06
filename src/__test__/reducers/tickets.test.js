import ticketsReducer from '../../reducers/ticketsReducer';
import * as actionTypes from '../../store/actionTypes';

describe('Tickets reducer', () => {
  const currentState = [
    { id: 1 }, { id: 2 }
  ];

  it('Save tickets', () => {
    const newTickets = [
      { id: 3 }, { id: 4 }
    ];
    const action = {
      type: actionTypes.SAVE_TICKETS,
      payload: newTickets
    };
    const expected = [...currentState, ...newTickets];

    expect(ticketsReducer(currentState, action)).toEqual(expected);
  });

  it('Without changes', () => {
    expect(ticketsReducer(currentState, {})).toEqual(currentState);
  });
});
