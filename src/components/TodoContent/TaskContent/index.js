import React from 'react';
import './index.scss';
import { todoTaskDOMGenerator } from '../../../assets/utils/todoTaskDOMGenerator.js';
const taskContent = props => {
  const { filterTodoTasks } = props;
  const { 
    propsTaskStatusHandler,
    propsRemoveTask
  } = props;

  const taskMethods = {
    propsTaskStatusHandler,
    propsRemoveTask
  };
  

  return (
    <div className="task-list">
      { filterTodoTasks.map(task => todoTaskDOMGenerator(task, taskMethods)) }
    </div>
  );
};

export default taskContent;