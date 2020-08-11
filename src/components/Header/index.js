import React from 'react';
import dayjs from 'dayjs';
import './index.scss';
import { ReactComponent as RefreshIcon } from '../../assets/img/refresh-icon.svg';

const Header = props => {
  const { propsRemoveAllTasks } = props;
  return (
    <div className="header">
      <RefreshIcon className="refresh" onClick={ propsRemoveAllTasks }/>
      <p className="date">{ dayjs().format('dddd, MMM D') }</p>
    </div>
  );
}

export default Header;