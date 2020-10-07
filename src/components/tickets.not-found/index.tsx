import React from 'react';
import actions from '../../store/actions';
import filters from '../../services/filters';
import formatNumber from '../../utils/formatNumber';
import getWordFormAfterNumber from '../../utils/getWordFormAfterNumber';
import './tickets-not-found.scss';

type Props = {
  ticketsCount: number
  setFilter: typeof actions.setFilter
}

const TicketsNotFound: React.FC<Props> = (props: Props) => {
  const {
    ticketsCount,
    setFilter
  } = props;

  const onResetFilters = () => {
    setFilter(filters.ALL);
  };

  return (
    <section className="tickets-not-found">
      <p className="tickets-not-found__message">
        {
          `Мы нашли
          ${formatNumber(ticketsCount)}
          ${getWordFormAfterNumber(ticketsCount, ['рейс', 'рейса', 'рейсов'])},
          но ни один не соответствует заданным фильтрам`
        }
      </p>
      <button
        className="tickets-not-found__button"
        onClick={onResetFilters}>
        Сбросить фильтры
      </button>
    </section>
  );
};

export default TicketsNotFound;
