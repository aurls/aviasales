import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import filters from '../../services/filters';
import selectors from '../../store/selectors';
import actions from '../../store/actions';
import './filters.scss';

export const Filters = ({ filter, setFilter }) => {
  // const isFilterChecked = (filter) => {
  //   return appliedFilters.includes(filters.ALL.type) || appliedFilters.includes(filter.type);
  // };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filters">
      <h2 className="filters__title">Количество пересадок</h2>
      <ul>
        {
          // Object.values(filters).map((filter) =>
          //   <li key={filter.type}>
          //     <label className="filter"
          //       htmlFor={`filter-${filter.type}`}>
          //       <input className="filter__checkbox"
          //         id={`filter-${filter.type}`}
          //         type="checkbox"
          //         name="filter"
          //         value={filter.type}
          //         checked={isFilterChecked(filter)}
          //         onChange={onChangeFilter} />
          //       {filter.name}
          //     </label>
          //   </li>)
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: selectors.getFilter(state)
  };
};

const mapDispatchToProps = {
  setFilter: actions.setFilter
};

Filters.propTypes = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
