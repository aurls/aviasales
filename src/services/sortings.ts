import Types from '../types';

const BY_PRICE_ASC: Types.Sorting = {
  type: 'BY_PRICE_ASC',
  title: 'Самый дешёвый',
  fn: (prevPrice, nextPrice) => prevPrice - nextPrice
};

const BY_SPEED_ASC: Types.Sorting = {
  type: 'BY_SPEED_ASC',
  title: 'Самый быстрый',
  fn: (prevSpeed, nextSpeed) => prevSpeed - nextSpeed
};

export default {
  BY_PRICE_ASC,
  BY_SPEED_ASC
};
