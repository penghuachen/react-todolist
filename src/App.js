import React, { Component } from 'react';
import './App.scss';

// components
import AddTask from './components/AddTask';
import Header from './components/Header';
import TodoContent from './components/TodoContent';

class App extends Component {
  state = {
    todoTasks: [],
    filterTodoTasks: [],
    status: '全部',
    taskInput: ''
  }

  propsAddTask = task => {
    this.setState(state => {
      const { todoTasks } = state;
      todoTasks.push(task);
      return state;
    });
    this.setState({ taskInput: '' });
    this.propsFilterTodoTasks(this.state.status);
  }

  propsTaskInputHandler = value => {
    this.setState({
      taskInput: value
    });
  }

  propsTaskStatusHandler = task => {
    const { id } = task;
    this.setState(state => {
      let { todoTasks } = state;
      const index = todoTasks.findIndex(task => task.id === id);
      todoTasks[index] = task;
      return state;
    });
    this.propsFilterTodoTasks(this.state.status);
  }

  propsRemoveAllTasks = () => {
    const request = window.confirm("確定要刪除所有待辦任務嗎");
    if (request) {
      this.setState({ todoTasks: [] });
      this.propsFilterTodoTasks(this.state.status);
      alert('成功刪除');
    } else {
      alert('取消刪除所有待辦任務。');
    }
  };

  propsRemoveTask = id => {
    this.setState(state => {
      const { todoTasks } = state; 
      const index = todoTasks.findIndex(task => task.id === id);
      todoTasks.splice(index, 1);
      return state;
    });
    this.propsFilterTodoTasks(this.state.status);
  }

  propsFilterTodoTasks = statusRegion => {
    this.setState(state => {
      let { todoTasks } = state; 
      let arr = [];
      if (statusRegion === '全部') arr = todoTasks;
      if (statusRegion === '進行中') arr = todoTasks.filter(task => !task.done);
      if (statusRegion === '已完成') arr = todoTasks.filter(task => task.done);
      return {
        filterTodoTasks: arr,
        status: statusRegion
      };
    })
  }

  render() {
    const { 
      todoTasks, 
      taskInput, 
      filterTodoTasks, 
      status 
    } = this.state;
    return (
      <div className="app"> 
        <div className="container">
          <Header propsRemoveAllTasks={ this.propsRemoveAllTasks } />
          <TodoContent
            todoTasks={ todoTasks }
            filterTodoTasks={ filterTodoTasks }
            propsTaskStatusHandler={ this.propsTaskStatusHandler }
            propsRemoveTask={ this.propsRemoveTask }
            propsFilterTodoTasks={ this.propsFilterTodoTasks }
            status={ status }
          />
          <AddTask 
            taskInput={ taskInput }
            propsAddTask={ this.propsAddTask }
            propsTaskInputHandler={ this.propsTaskInputHandler }
          />
        </div>
      </div>
    );
  }
}

export default App;
