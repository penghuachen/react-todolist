import React from 'react';
import './index.scss';
import { ReactComponent as PlusIcon } from '../../assets/img/plus-icon.svg';

const AddTask = () => {
  return (
    <div className="add-task">
      <div className="plus">
        <PlusIcon />
      </div>
      <div className="input-task">
        <input 
          type="text" 
          placeholder="Add a to-do"
          v-model="todoTask"
        />
      </div>
    </div>
  );
}

export default AddTask;
