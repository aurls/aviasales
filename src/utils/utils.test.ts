import { getTransfersTitle, getDuration } from './formatters';
import getTicketDuration from './getTicketDuration';
import getWordFormAfterNumber from './getWordFormAfterNumber';
import mockedTicket from '../store/tests/mockedTicket';

describe('Util functions', () => {
  it('getTicketDuration', () => {
    expect(getTicketDuration(mockedTicket)).toEqual(1572);
  });

  it('getWordFormAfterNumber', () => {
    const wordForms: [string, string, string] = ['единица', 'единицы', 'единиц'];

    expect(getWordFormAfterNumber(1, wordForms)).toEqual(wordForms[0]);
    expect(getWordFormAfterNumber(2, wordForms)).toEqual(wordForms[1]);
    expect(getWordFormAfterNumber(15, wordForms)).toEqual(wordForms[2]);
  });

  describe('formatters', () => {
    it('getTransfersTitle', () => {
      expect(getTransfersTitle(0)).toEqual('Без пересадок');
      expect(getTransfersTitle(1)).toEqual('1 пересадка');
      expect(getTransfersTitle(2)).toEqual('2 пересадки');
      expect(getTransfersTitle(5)).toEqual('5 пересадок');
    });

    it('getDuration', () => {
      expect(getDuration(25)).toEqual('25м');
      expect(getDuration(170)).toEqual('2ч 50м');
    });
  });
});
