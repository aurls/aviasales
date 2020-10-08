import React from 'react';
import Enzyme from 'enzyme';
import Filters from './index';
import { initialState } from '../../store/reducer';
import filters from '../../services/filters';

describe('Filters component', () => {
  const setFilter = jest.fn();
  let component: Enzyme.ShallowWrapper;

  beforeEach(() => {
    component = Enzyme.shallow(
      <Filters
        currentFilters={initialState.filters}
        setFilter={setFilter} />
    );
  });

  it('Default state', () => {
    expect(component).toMatchSnapshot();
  });

  it('Filter changed', () => {
    const selector = '.filter__checkbox[value="ALL"]';
    component.find(selector).simulate('change');

    expect(setFilter).toHaveBeenCalledWith(filters.ALL);
  });
});
