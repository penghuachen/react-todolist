import React, { Component } from 'react';
import './index.scss';
import { todoTaskDOMGenerator } from '../../../assets/utils/todoTaskDOMGenerator.js';
class taskContent extends Component {
  render() {
    const { todoTasks } = this.props;

    return (
      <div className="task-list">
        { todoTasks.map(task => todoTaskDOMGenerator(task)) }
      </div>
    );
  }
}

export default taskContent;