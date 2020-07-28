import React from 'react';
import './index.scss';

import TaskContent from './TaskContent';
import TaskStatus from './TaskStatus';

const TodoContent = () => {
  return (
    <div className="content">
    <TaskStatus />
    <TaskContent />
  </div>
  );
};

export default TodoContent;
