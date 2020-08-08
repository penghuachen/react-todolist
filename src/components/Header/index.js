import React, { Component } from 'react';
import dayjs from 'dayjs';
import './index.scss';
import { ReactComponent as RefreshIcon } from '../../assets/img/refresh-icon.svg';

class header extends Component {
  render() {
    return (
      <div className="header">
        <p className="date">{ dayjs().format('dddd, MMM D') }</p>
      </div>
    );
  }
}

export default header;