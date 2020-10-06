import React from 'react';
import { Ticket } from '../../components/ticket';

const ticketTest = {
  price: 24769,
  carrier: 'EY',
  segments: [
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2020-02-08T20:24:00.000Z',
      stops: [],
      duration: 797
    },
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2020-02-29T7:10:00.000Z',
      stops: [],
      duration: 775
    }
  ]
};

describe('ticket component', () => {
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
