import * as actionTypes from '../../store/actionTypes';
import { setFetching, setError } from '../../actions/appearance';

describe('Appearance action creators', () => {
  it('Set fetching', () => {
    const newStatus = true;
    const expectedAction = {
      type: actionTypes.SET_FETCHING,
      payload: newStatus
    };

    expect(setFetching(newStatus)).toEqual(expectedAction);
  });

  it('Set error', () => {
    const newStatus = true;
    const expectedAction = {
      type: actionTypes.SET_ERROR,
      payload: newStatus
    };

    expect(setError(newStatus)).toEqual(expectedAction);
  });
});
