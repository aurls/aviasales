import React from 'react';
import Enzyme from 'enzyme';
import Ticket from './index';
import mockedTicket from '../../store/tests/mockedTicket';

describe('Ticket component', () => {
  let component: Enzyme.CommonWrapper;

  beforeEach(() => {
    component = Enzyme.shallow(
      <Ticket ticket={mockedTicket} />);
  });

  it('Default state', () => {
    expect(component).toMatchSnapshot();
  });
});
