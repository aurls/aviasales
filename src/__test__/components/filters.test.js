import React from 'react';

import { Filters } from '../../components/Filters';
import { initialState as appliedFilters } from '../../reducers/filterReducer';

describe('Filters component', () => {
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
