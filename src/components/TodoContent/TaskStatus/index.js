import React from 'react';
import './index.scss';

const TaskStatus = () => {
  return (
    <div className="task-status">
      <p className="all-task current">
        全部
      </p>
      <p className="doing-task">
        進行中
      </p>
      <p className="finished-task">
        已完成
      </p>
    </div>
  );
};

export default TaskStatus;