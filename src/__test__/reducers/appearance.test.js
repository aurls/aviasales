import appearanceReducer, { initialState } from '../../reducers/appearanceReducer';
import * as actionTypes from '../../store/actionTypes';

describe('Appearance reducer', () => {
  it('Set fetching', () => {
    const action = {
      type: actionTypes.SET_FETCHING,
      payload: true
    };
    const expected = {
      isFetching: true,
      hasError: false
    };

    expect(appearanceReducer(initialState, action)).toEqual(expected);
  });

  it('Set error', () => {
    const action = {
      type: actionTypes.SET_ERROR,
      payload: true
    };
    const expected = {
      isFetching: false,
      hasError: true
    };

    expect(appearanceReducer(initialState, action)).toEqual(expected);
  });

  it('Default', () => {
    expect(appearanceReducer(initialState, {})).toEqual(initialState);
  });
});
