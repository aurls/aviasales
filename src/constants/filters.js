export const ALL = {
  type: 'ALL',
  name: 'Все',
  callback: null
};

export const NO_TRANSFERS = {
  type: 'NO_TRANSFERS',
  name: 'Без пересадок',
  callback: (numberOfTransfers) => numberOfTransfers === 0
};

export const ONE_TRANSFER = {
  type: 'ONE_TRANSFER',
  name: '1 пересадка',
  callback: (numberOfTransfers) => numberOfTransfers === 1
};

export const TWO_TRANSFERS = {
  type: 'TWO_TRANSFERS',
  name: '2 пересадки',
  callback: (numberOfTransfers) => numberOfTransfers === 2
};

export const THREE_TRANSFERS = {
  type: 'THREE_TRANSFERS',
  name: '3 пересадки',
  callback: (numberOfTransfers) => numberOfTransfers === 3
};
