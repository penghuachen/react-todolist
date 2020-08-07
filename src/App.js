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

  render() {
    const { todoTasks,taskInput } = this.state;
    return (
      <div className="app"> 
        <div className="container">
          <Header />
          <TodoContent
            todoTasks={ todoTasks }
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
