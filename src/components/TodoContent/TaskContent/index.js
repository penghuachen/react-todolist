import React, { Component } from 'react';
import './index.scss';
import { todoTaskDOMGenerator } from '../../../assets/utils/todoTaskDOMGenerator.js';
class taskContent extends Component {
  render() {
    const { filterTodoTasks } = this.props;
    const { 
      propsTaskStatusHandler,
      propsRemoveTask
    } = this.props;

    const taskMethods = {
      propsTaskStatusHandler,
      propsRemoveTask
    };
    

    return (
      <div className="task-list">
        { filterTodoTasks.map(task => todoTaskDOMGenerator(task, taskMethods)) }
      </div>
    );
  }
}

export default taskContent;