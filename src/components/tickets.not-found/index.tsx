import React from 'react';
import * as filters from '../../constants/filters';
import formatNumber from '../../utils/formatNumber';
import index from '../../utils/getWordFormAfterNumber';
import './tickets-not-found.scss';

const TicketsNotFound = ({ ticketsCount, setFilter }) => {
  const onResetFilters = () => {
    setFilter(filters.ALL.type);
  };

  return (
    <section className="tickets-not-found">
      <p className="tickets-not-found__message">
        {
          `Мы нашли
          ${formatNumber(ticketsCount)}
          ${index(ticketsCount, ['рейс', 'рейса', 'рейсов'])},
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

TicketsNotFound.propTypes = {
  ticketsCount: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default TicketsNotFound;
