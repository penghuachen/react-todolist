import React, { Component } from 'react';
import './App.scss';

// components
import AddTask from './components/AddTask';
import Header from './components/Header';
import TodoContent from './components/TodoContent';

class App extends Component {
  state = {
    todoTasks: [],
    taskInput: ''
  }

  propsAddTask = task => {
    this.setState(state => {
      const { todoTasks } = state;
      todoTasks.push(task);
      return state;
    });
    this.setState({ taskInput: '' });
  }

  propsTaskInputHandler = value => {
    this.setState({
      taskInput: value
    });
  }

  propsRemoveAllTasks = () => {
    const request = window.confirm("確定要刪除所有待辦任務嗎");
    if (request) {
      this.setState({ todoTasks: [] });
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
  }

  }

  render() {
    const { todoTasks,taskInput } = this.state;
    return (
      <div className="app"> 
        <div className="container">
          <Header propsRemoveAllTasks={ this.propsRemoveAllTasks } />
          <TodoContent
            todoTasks={ todoTasks }
            propsRemoveTask={ this.propsRemoveTask }
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
