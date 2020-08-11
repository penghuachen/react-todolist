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

  const propsAddTask = task => {
    setTodoState(({ todoTasks, taskInput, ...state }) => {
      todoTasks.push(task);
      return { taskInput: '', todoTasks, ...state };
    });
    propsFilterTodoTasks(todoState.status);
  };

  const propsTaskInputHandler = value => {
    setTodoState(({ taskInput, ...state }) => {
      return { taskInput: value, ...state };
    });
  };

  const propsTaskStatusHandler = task => {
    const { id } = task;
    setTodoState(({ todoTasks, ...state }) => {
      const index = todoTasks.findIndex(task => task.id === id);
      todoTasks[index] = task;
      return { todoTasks, ...state };
    });
    propsFilterTodoTasks(todoState.status);
  };

  const propsRemoveAllTasks = () => {
    const request = window.confirm("確定要刪除所有待辦任務嗎");
    if (request) {
      setTodoState(({ todoTasks, ...state }) => {
        return { todoTasks: [], ...state };
      });
      propsFilterTodoTasks(todoState.status);
      alert('成功刪除');
    } else {
      alert('取消刪除所有待辦任務。');
    }
  };

  const propsRemoveTask = id => {
    setTodoState(({ todoTasks, ...state }) => {
      const index = todoTasks.findIndex(task => task.id === id);
      todoTasks.splice(index, 1);
      return { todoTasks, ...state };
    });
    propsFilterTodoTasks(todoState.status);
  };

  const propsFilterTodoTasks = statusRegion => {
    setTodoState(({ filterTodoTasks, todoTasks, status, ...state }) => {
      let arr = [];
      if (statusRegion === '全部') arr = todoTasks;
      if (statusRegion === '進行中') arr = todoTasks.filter(task => !task.done);
      if (statusRegion === '已完成') arr = todoTasks.filter(task => task.done);
      return {
        filterTodoTasks: arr,
        status: statusRegion,
        todoTasks,
        ...state
      };
    })
  };

  return (
    <div className="app"> 
      <div className="container">
        <Header propsRemoveAllTasks={ propsRemoveAllTasks }/>
        <TodoContent 
          todoTasks={ todoState.todoTasks }
          filterTodoTasks={ todoState.filterTodoTasks }
          propsTaskStatusHandler={ propsTaskStatusHandler }
          propsRemoveTask={ propsRemoveTask }
          propsFilterTodoTasks={ propsFilterTodoTasks }
          status={ todoState.status }
        />
        <AddTask 
          taskInput={ todoState.taskInput }
          propsAddTask={ propsAddTask }
          propsTaskInputHandler={ propsTaskInputHandler }
        />
      </div>
    </div>
  );
}
export default App;
