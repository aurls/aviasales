import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './header.scss';
import logo from './logo.png';

const Header = ({ appearance }) => {
  let logoStyle = 'header__logo';
  if (appearance.isFetching) logoStyle += ' is-fetching';

  return (
    <header className="header">
      <img className={logoStyle} src={logo} alt="logo" />
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    appearance: state.appearance
  };
};

Header.propTypes = {
  appearance: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Header);
