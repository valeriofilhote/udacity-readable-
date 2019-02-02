import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import { NavBar } from '../../components'
import Default from '../Default/Default'
import PostDetail from '../PostDetail/PostDetail'
import PostForm from '../PostForm/PostForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <NavBar />
            <div className="container" style={{ paddingTop: 85 }}>
              <Route path="/" exact component={Default} />
              <Route path="/post-detail" component={PostDetail} />
              <Route path="/post-editing" component={PostForm} />
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
