import React from 'react';
import './index.scss';
import { ReactComponent as RefreshIcon } from '../../assets/img/refresh-icon.svg';

const Header = () => {
  return (
    <div className="Header">
      <RefreshIcon className="refresh" />
      <p className="date">Monday, Jul 27</p>
    </div>
  );
}

export default Header;