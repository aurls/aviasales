import React from 'react';

import { Sorting } from '../../components/Sorting';
import { initialState as appliedSorting } from '../../reducers/sortingReducer';
import * as sorting from '../../constants/sorting';

describe('Sorting component', () => {
  const setSorting = jest.fn();
  let component;

  beforeEach(() => {
    component = shallow(
      <Sorting
        appliedSorting={appliedSorting}
        setSorting={setSorting} />
    );
  });

  it('Default state', () => {
    expect(component).toMatchSnapshot();
  });

  it('Sorting changed', () => {
    const id = Object.values(sorting)[1].type;
    const selector = `.sorting__item[id="${id}"]`;
    component.find(selector).simulate('click', { target: { id } });

    expect(setSorting).toHaveBeenCalled();
  });
});
