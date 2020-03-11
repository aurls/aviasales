import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as sorting from '../../constants/sorting';
import { sorting as sortingActions } from '../../actions';
import './sorting.scss';

const Sorting = ({ appliedSorting, setSorting }) => {
  const onChangeSorting = (event) => {
    setSorting(event.target.id);
  };

  return (
    <ul className="sorting">
      {
        Object.values(sorting).map((item) => {
          let itemStyle = 'sorting__item';
          if (appliedSorting.includes(item.type)) itemStyle += ' is-active';
          return (
            <li key={item.type}
              className={itemStyle}
              id={item.type}
              onClick={onChangeSorting}>
              {item.name}
            </li>);
        })
      }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    appliedSorting: state.appliedSorting
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSorting: bindActionCreators(sortingActions.setSorting, dispatch)
  };
};

Sorting.propTypes = {
  appliedSorting: PropTypes.array.isRequired,
  setSorting: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sorting);
