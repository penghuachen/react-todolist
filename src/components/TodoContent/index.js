import React, { Component } from 'react';
import './index.scss';

import TaskContent from './TaskContent';
import TaskStatus from './TaskStatus';

class todoContent extends Component {
  render() {
    return (
      <div className="content">
        <TaskStatus />
        <TaskContent />
      </div>
    );
  }
}
export default todoContent;
