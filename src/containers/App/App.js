import React, { Component } from 'react';
import './App.css';

// Temp
import PostForm from '../PostForm/PostForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Temp */}
        <div className="temp__container">
          <div className="m-t-1">
            <PostForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
