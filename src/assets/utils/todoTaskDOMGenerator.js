import React from 'react';

import { ReactComponent as DeleteIcon } from '../img/delete-icon.svg';
import { ReactComponent as CheckIcon } from '../img/check-icon.svg';



export const todoTaskDOMGenerator = (task, taskMethods) => {

  const { id, done, edit, taskContent } = task;
  const {
    propsTaskStatusHandler,
    propsRemoveTask
  } = taskMethods;

  const emitTaskDoneHandler = task => {
    task.done = true;
    propsTaskStatusHandler(task);
  };
  const emitTaskuUnDoneHandler = task => {
    task.done = false;
    propsTaskStatusHandler(task)
  };   
  const checkTaskStatus = done => {
    const undonedTask = (
      <div 
        className="undone" 
        onClick={ () => emitTaskDoneHandler(task) }>
      </div>
    );

    const donedTask = (
      <div 
        className="done"
        onClick={ () => emitTaskuUnDoneHandler(task) }
      >
        <CheckIcon />
      </div>
    );

    return !done ? undonedTask : donedTask;
  };

  const checkTaskEditStatus = (edit, done) => {
    const editedTask = (
      <input 
        className="editTask" 
        onKeyPress={ (e) => emitUnEditedTaskHandler(e, task) }
      />
    );

    const uneditedTask  = (
      <p 
        onDoubleClick={ (e) => emitEditedTaskHandler(e, task) }
        className={ done ? 'line-through' : null }
      >
        { taskContent }
      </p>
    );

    return edit ? editedTask : uneditedTask;
  };

  const emitEditedTaskHandler = (e, task) => {

    task.edit = true; 
    propsTaskStatusHandler(task);
  };

  const emitUnEditedTaskHandler = (e, task) => {
    if (e.charCode === 13) {
      task.edit = false; 
      task.taskContent = e.target.value;
      propsTaskStatusHandler(task);
    }
  };

  const emitRemoveTask = id => {
    propsRemoveTask(id);
  };

  return (
    <div className="task" key={ id } id={ id }>
      { checkTaskStatus(done) }
      <div className="task-content">
        { checkTaskEditStatus(edit, done) }
      </div>
      <div className="delete-icon" onClick={ () => emitRemoveTask(id) }>
        <DeleteIcon/>
      </div> 
    </div>
  )
};