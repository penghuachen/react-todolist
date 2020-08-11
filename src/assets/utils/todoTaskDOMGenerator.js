import React from 'react';

import { ReactComponent as DeleteIcon } from '../img/delete-icon.svg';
import { ReactComponent as CheckIcon } from '../img/check-icon.svg';
export const todoTaskDOMGenerator = task => {
  const { id, done, edit, taskContent } = task;
  const {
    propsRemoveTask
  } = taskMethods;
  const emitRemoveTask = id => {
    propsRemoveTask(id);
  };

  return (
    <div className="task" key={ id } id={ id }>
      <div className="undone"></div>
      {/* <div className="done">
        <CheckIcon />
      </div> */}
      <div className="task-content">
      <p>{ taskContent }</p>
        {/* <input className="editTask" /> */}
      </div>
      <div className="delete-icon" onClick={ () => emitRemoveTask(id) }>
        <DeleteIcon/>
      </div> 
    </div>
  )
};