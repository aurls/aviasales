export const BY_PRICE_ASC = {
  type: 'BY_PRICE_ASC',
  name: 'Самый дешёвый',
  callback: (prevPrice, nextPrice) => prevPrice - nextPrice
};

export const BY_SPEED_ASC = {
  type: 'BY_SPEED_ASC',
  name: 'Самый быстрый',
  callback: (prevSpeed, nextSpeed) => prevSpeed - nextSpeed
};
