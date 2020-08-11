import React from 'react';
import './index.scss';

import TaskContent from './TaskContent';
import TaskStatus from './TaskStatus';

const todoContent = props => {
  const { filterTodoTasks, status } = props;
  const { 
    propsTaskStatusHandler,
    propsRemoveTask,
    propsFilterTodoTasks
  } = props;
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
};
export default todoContent;
