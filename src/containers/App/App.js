import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import { NavBar } from '../../components'
import Default from '../Default/Default'
import PostDetail from '../PostDetail/PostDetail'
import PostForm from '../PostForm/PostForm'
import { getPostDetail, fetchAllPosts, fetchPostsByCategory } from '../../actions/post.actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <NavBar />
            <div className="container" style={{ paddingTop: 85 }}>
              <Route path="/" exact render={this._listAllPosts} />
              <Route path="/:category" render={this._listPostByCategory} />
              <Route path="/post-detail/:postId" render={this._postDetailRoute} />
              <Route path="/post-editing" component={PostForm} />
              <Route path="/new-post" component={PostForm} />
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
  _postDetailRoute = (routeInfo) => {
    const { match: { params: { postId } } } = routeInfo
    this.props.dispatch(getPostDetail(postId))
    return <PostDetail />
  }
  _listPostByCategory = (routeInfo) => {
    const { match: { params: { category } } } = routeInfo
    this.props.dispatch(fetchPostsByCategory(category))
    return <Default />
  }
  _listAllPosts = () => {
    this.props.dispatch(fetchAllPosts())
    return <Default />
  }
}

export default connect()(App);
