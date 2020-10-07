import React from 'react';
import Types from '../../types';
import actions from '../../store/actions';
import filters from '../../services/filters';
import './filters.scss';

type Props = {
  currentFilters: Types.Filter[]
  setFilter: typeof actions.setFilter
}

const Filters: React.FC<Props> = (props: Props) => {
  const {
    currentFilters,
    setFilter
  } = props;

  const isFilterChecked = (filter: Types.Filter) => {
    return currentFilters.includes(filter) || currentFilters.includes(filters.ALL);
  };

  const onFilterClick = (filter: Types.Filter) => {
    setFilter(filter);
  };

  return (
    <div className="filters">
      <h2 className="filters__title">Количество пересадок</h2>
      <ul>
        {
          Object.values(filters).map((filter) =>
            <li key={filter.type}>
              <label className="filter">
                <input className="filter__checkbox"
                  type="checkbox"
                  name="filter"
                  value={filter.type}
                  checked={isFilterChecked(filter)}
                  onChange={() => onFilterClick(filter)} />
                {filter.title}
              </label>
            </li>)
        }
      </ul>
    </div>
  );
};

export default React.memo(Filters);
