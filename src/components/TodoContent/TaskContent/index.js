import React from 'react';
import './index.scss';

import { ReactComponent as CheckIcon } from '../../../assets/img/check-icon.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/img/delete-icon.svg';

const TaskContent = () => {
  return (
    <div className="task-list">
      <div className="task">
          <div className="undone"></div>
          {/* <div className="done">
            <CheckIcon />
          </div> */}
          <div className="task-content">
            <p>task content</p>
            {/* <input className="editTask" /> */}
          </div>
          <div className="delete-icon">
            <DeleteIcon/>
          </div> 
      </div>
  </div>
  );
}

export default TaskContent;