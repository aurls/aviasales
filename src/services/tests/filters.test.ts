import filters, { filterTickets } from '../filters';
import mockedTicket from '../../store/tests/mockedTicket';

describe('Filters service', () => {
  it('Filters applied', () => {
    const expected = [mockedTicket];

    expect(filterTickets([mockedTicket], [filters.ONE_TRANSFER]))
      .toEqual(expected);
  });

  it('Filters not applied', () => {
    expect(filterTickets([mockedTicket], [filters.THREE_TRANSFERS]))
      .toEqual([]);
  });
});
