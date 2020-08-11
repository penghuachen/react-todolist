import React, { Component } from 'react';
import './index.scss';

// utils
import { todoTaskIdGenerator } from '../../assets/utils/todoTaskIdGenerator.js';

// components
import { ReactComponent as PlusIcon } from '../../assets/img/plus-icon.svg';

class addTask extends Component {
  emitAddTask = (propsAddTask, taskInput) => {
    const obj = { 
      id: todoTaskIdGenerator(), 
      done: false, 
      edit: false, 
      taskContent: taskInput
    };
    propsAddTask(obj);
  };

  render() {
    const { taskInput } = this.props;
    const { 
      propsAddTask,
      propsTaskInputHandler
    } = this.props;

    return (
      <div className="add-task">
        <div className="plus">
          <PlusIcon 
            onClick={ () => this.emitAddTask(propsAddTask, taskInput) }
          />
        </div>
        <div className="input-task">
          <input 
            type="text" 
            placeholder="Add a to-do"
            onChange={ e => propsTaskInputHandler(e.target.value) }
            onKeyPress={ e => {(
                taskInput !== ''
                && e.charCode === 13 
                && this.emitAddTask(propsAddTask, taskInput)
              )}
            }
            value={ taskInput }
          />
        </div>
      </div>
    );
  }
}

export default addTask;
