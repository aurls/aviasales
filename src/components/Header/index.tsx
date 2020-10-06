import React from 'react';

import './header.scss';
import logo from './logo.png';

const Header = ({ isFetching }) => {
  let logoStyle = 'header__logo';
  if (isFetching) logoStyle += ' is-fetching';

  return (
    <header className="header">
      <img className={logoStyle} src={logo} alt="logo" />
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: selectors.getIsFetching(state)
  };
};

Header.propTypes = {
  isFetching: PropTypes.bool.isRequired
};

export default React.memo(Header);
