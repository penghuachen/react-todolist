import React, { useState } from 'react';
import './App.scss';

// components
import AddTask from './components/AddTask';
import Header from './components/Header';
import TodoContent from './components/TodoContent';

const App = () => {
  const initState = {
    todoTasks: [],
    filterTodoTasks: [],
    status: '全部',
    taskInput: ''
  };
  const [todoState, setTodoState] = useState(initState);
  const { 
    todoTasks, 
    taskInput, 
    filterTodoTasks, 
    status 
  } = todoState;
  const propsAddTask = task => {
    setTodoState(state => {
      const { todoTasks } = state;
      todoTasks.push(task);
      return state;
    });
    setTodoState(state => {
      return {
        ...state,
        taskInput: ''
      };
    });
    propsFilterTodoTasks(status);
  };

  const propsTaskInputHandler = value => {
    setTodoState(state => {
      return { ...state, taskInput: value };
    });
  };

  const propsTaskStatusHandler = task => {
    const { id } = task;
    setTodoState(state => {
      let { todoTasks } = state;
      const index = todoTasks.findIndex(task => task.id === id);
      todoTasks[index] = task;
      return { ...state, todoTasks };
    });
    propsFilterTodoTasks(status);
  };

  const propsRemoveAllTasks = () => {
    const request = window.confirm("確定要刪除所有待辦任務嗎");
    if (request) {
      setTodoState(state => {
        return { ...state, todoTasks: [] };
      });
      propsFilterTodoTasks(status);
      alert('成功刪除');
    } else {
      alert('取消刪除所有待辦任務。');
    }
  };

  const propsRemoveTask = id => {
    setTodoState(state => {
      const { todoTasks } = state; 
      const index = todoTasks.findIndex(task => task.id === id);
      todoTasks.splice(index, 1);
      return { ...state, todoTasks };
    });
    propsFilterTodoTasks(status);
  };

  const propsFilterTodoTasks = statusRegion => {
    setTodoState(state => {
      let { todoTasks } = state; 
      let arr = [];
      if (statusRegion === '全部') arr = todoTasks;
      if (statusRegion === '進行中') arr = todoTasks.filter(task => !task.done);
      if (statusRegion === '已完成') arr = todoTasks.filter(task => task.done);
      return {
        ...state,
        filterTodoTasks: arr,
        status: statusRegion
      };
    })
  };

  return (
    <div className="app"> 
      <div className="container">
        <Header propsRemoveAllTasks={ propsRemoveAllTasks }/>
        <TodoContent 
          todoTasks={ todoTasks }
          filterTodoTasks={ filterTodoTasks }
          propsTaskStatusHandler={ propsTaskStatusHandler }
          propsRemoveTask={ propsRemoveTask }
          propsFilterTodoTasks={ propsFilterTodoTasks }
          status={ status }
        />
        <AddTask 
          taskInput={ taskInput }
          propsAddTask={ propsAddTask }
          propsTaskInputHandler={ propsTaskInputHandler }
        />
      </div>
    </div>
  );
}
export default App;
