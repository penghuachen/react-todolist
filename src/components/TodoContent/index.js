import React, { Component } from 'react';
import './index.scss';

import TaskContent from './TaskContent';
import TaskStatus from './TaskStatus';

class todoContent extends Component {
  render() {
    const { filterTodoTasks, status } = this.props;
    const { 
      propsTaskStatusHandler,
      propsRemoveTask,
      propsFilterTodoTasks
    } = this.props;
    return (
      <div className="content">
        <TaskStatus
          propsFilterTodoTasks={ propsFilterTodoTasks }
          status={ status }
        />
        <TaskContent 
          filterTodoTasks={ filterTodoTasks }
          propsTaskStatusHandler={ propsTaskStatusHandler }
          propsRemoveTask={ propsRemoveTask }
        />
      </div>
    );
  }
}
export default todoContent;
