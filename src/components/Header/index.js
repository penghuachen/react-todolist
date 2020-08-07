import React, { Component } from 'react';
import './index.scss';
import { ReactComponent as RefreshIcon } from '../../assets/img/refresh-icon.svg';

class header extends Component {
  render() {
    return (
      <div className="header">
        <RefreshIcon className="refresh" />
        <p className="date">Monday, Jul 27</p>
      </div>
    );
  }
}

export default header;