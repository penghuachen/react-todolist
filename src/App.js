import React, { Component } from 'react';
import './App.scss';

// components
import AddTask from './components/AddTask';
import Header from './components/Header';
import TodoContent from './components/TodoContent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <Header />
          <TodoContent />
          <AddTask />
        </div>
      </div>
    );
  }
}

export default App;
