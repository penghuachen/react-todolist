import React from 'react';
import './App.scss';

// components
import AddTask from './components/AddTask';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
