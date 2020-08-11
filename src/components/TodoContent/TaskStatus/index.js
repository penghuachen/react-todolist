import React, { Component } from 'react';
import './index.scss';

class taskStatus extends Component {
  render() {
    const { 
      propsFilterTodoTasks,
      status
    } = this.props;
    
    return (
      <div className="task-status" onClick={ 
        e => {
          const status = e.target.textContent;
          propsFilterTodoTasks(status);
        } 
      }>
        <p className={ 
          `all-task 
          ${ status === '全部' ? 'current' : null }` 
        }>
          全部
        </p>
        <p className={ 
          `doing-task 
          ${ status === '進行中' ? 'current' : null }` 
        }>
          進行中
        </p>
        <p className={ 
          `finished-task 
          ${ status === '已完成' ? 'current' : null }` 
        }>
          已完成
        </p>
      </div>
    );
  }
}

export default taskStatus;