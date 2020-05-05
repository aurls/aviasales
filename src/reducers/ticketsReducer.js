import * as actionTypes from '../constants/actionTypes';

export const initialState = [];

const ticketsReducer = (state = initialState, action) => {
  if (action.type === actionTypes.SAVE_TICKETS) {
    return addTickets(state, action.payload);
  }
  return state;
};

function addTickets (state, tickets) {
  return [
    ...state,
    ...tickets
  ];
}

export default ticketsReducer;
