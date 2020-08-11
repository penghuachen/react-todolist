import React, { Component } from 'react';
import dayjs from 'dayjs';
import './index.scss';
import { ReactComponent as RefreshIcon } from '../../assets/img/refresh-icon.svg';

class header extends Component {
  render() {
    const { propsRemoveAllTasks } = this.props;
    return (
      <div className="header">
        <RefreshIcon className="refresh" onClick={ propsRemoveAllTasks }/>
        <p className="date">{ dayjs().format('dddd, MMM D') }</p>
      </div>
    );
  }
}

export default header;