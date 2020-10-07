import Types from '../types';

const ALL: Types.Filter = {
  type: 'ALL',
  title: 'Все',
  fn: () => true
};

const NO_TRANSFERS: Types.Filter = {
  type: 'NO_TRANSFERS',
  title: 'Без пересадок',
  fn: (numberOfTransfers: number) => numberOfTransfers === 0
};

const ONE_TRANSFER: Types.Filter = {
  type: 'ONE_TRANSFER',
  title: '1 пересадка',
  fn: (numberOfTransfers: number) => numberOfTransfers === 1
};

const TWO_TRANSFERS: Types.Filter = {
  type: 'TWO_TRANSFERS',
  title: '2 пересадки',
  fn: (numberOfTransfers: number) => numberOfTransfers === 2
};

const THREE_TRANSFERS: Types.Filter = {
  type: 'THREE_TRANSFERS',
  title: '3 пересадки',
  fn: (numberOfTransfers: number) => numberOfTransfers === 3
};

export default {
  ALL,
  NO_TRANSFERS,
  ONE_TRANSFER,
  TWO_TRANSFERS,
  THREE_TRANSFERS
};
