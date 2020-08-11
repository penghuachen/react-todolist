import React, { Component } from 'react';
import './index.scss';
import { todoTaskDOMGenerator } from '../../../assets/utils/todoTaskDOMGenerator.js';
class taskContent extends Component {
  render() {
    const { 
      propsRemoveTask
    } = this.props;

    const taskMethods = {
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