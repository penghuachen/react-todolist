import React, { Component } from 'react';
import './index.scss';

class taskStatus extends Component {
  render() {
    return (
      <div className="task-status">
        <p className="all-task current">
          全部
        </p>
        <p className="doing-task">
          進行中
        </p>
        <p className="finished-task">
          已完成
        </p>
      </div>
    );
  }
}

export default taskStatus;