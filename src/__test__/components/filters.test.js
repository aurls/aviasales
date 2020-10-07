import React from 'react';

import { Filters } from '../../components/filters';
import { initialState as appliedFilters } from '../../reducers/filterReducer';

describe('filters component', () => {
  const setFilter = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(
      <Filters
        appliedFilters={appliedFilters}
        setFilter={setFilter} />
    );
  });

  it('Default state', () => {
    expect(component).toMatchSnapshot();
  });
});
