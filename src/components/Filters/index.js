import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as filters from '../../constants/filters';
import { filters as filtersActions } from '../../actions';
import './filters.scss';

const Filters = ({ appliedFilters, setFilter }) => {
  const isFilterChecked = (filter) => {
    return appliedFilters.includes(filters.ALL.type) || appliedFilters.includes(filter.type);
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filters">
      <h2 className="filters__title">Количество пересадок</h2>
      <ul>
        {
          Object.values(filters).map((filter) =>
            <li key={filter.type}>
              <label className="filter"
                htmlFor={`filter-${filter.type}`}>
                <input className="filter__checkbox"
                  id={`filter-${filter.type}`}
                  type="checkbox"
                  name="filter"
                  value={filter.type}
                  checked={isFilterChecked(filter)}
                  onChange={onChangeFilter} />
                {filter.name}
              </label>
            </li>)
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appliedFilters: state.appliedFilters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: bindActionCreators(filtersActions.setFilter, dispatch)
  };
};

Filters.propTypes = {
  appliedFilters: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
