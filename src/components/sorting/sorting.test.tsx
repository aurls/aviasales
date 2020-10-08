import React from 'react';
import Enzyme from 'enzyme';
import Sorting from './index';
import { initialState } from '../../store/reducer';
import sortings from '../../services/sortings';

describe('Sorting component', () => {
  const setSorting = jest.fn();
  let component: Enzyme.ShallowWrapper;

  beforeEach(() => {
    component = Enzyme.shallow(
      <Sorting
        currentSorting={initialState.sorting}
        setSorting={setSorting} />
    );
  });

  it('Default state', () => {
    expect(component).toMatchSnapshot();
  });

  it('Sorting changed', () => {
    const selector = '.sorting__item.is-active';
    component.find(selector).simulate('click');

    expect(setSorting).toHaveBeenCalledWith(sortings.BY_PRICE_ASC);
  });
});
