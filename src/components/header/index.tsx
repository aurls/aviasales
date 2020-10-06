import React from 'react';
import './header.scss';

type Props = {
  isFetching: boolean
}

const Header: React.FC<Props> = ({ isFetching }: Props) => {
  let logoStyle = 'header__logo';
  if (isFetching) logoStyle += ' is-fetching';

  return (
    <header className="header">
      <div className={logoStyle}>
      </div>
    </header>
  );
};

export default React.memo(Header);
