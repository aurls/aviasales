import React from 'react';
import { Ticket } from '../../components/Ticket';

const ticketTest = {
  price: 24769,
  carrier: 'EY',
  segments: [
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2020-02-08T22:24:00.000Z',
      stops: [],
      duration: 797
    },
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2020-02-29T10:10:00.000Z',
      stops: [],
      duration: 775
    }
  ]
};

describe('Ticket component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Ticket ticket={ticketTest} />
    );
  });

  it('Default state', () => {
    expect(component).toMatchSnapshot();
  });
});