import React, { Component } from 'react';
import './index.scss';

import TaskContent from './TaskContent';
import TaskStatus from './TaskStatus';

class todoContent extends Component {
  render() {
    const { todoTasks } = this.props;
    return (
      <div className="content">
        <TaskContent 
          propsRemoveTask={ propsRemoveTask }
        />
      </div>
    );
  }
}
export default todoContent;
