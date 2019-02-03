import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './Header/Header'
import { Post } from '../../components'
import './PostsList.css'

class PostsList extends Component {
    render() {
        //bodyVisible
        return (
            <div className="PostsList">
                <Header />
                <main>
                    <ul>
                        {this.props.posts.map(p => <li key={p.id}><Post post={p} /></li>)}
                    </ul>
                </main>
            </div>
        )
    }
}

const mapToProps = ({ post: { posts } }) => ({ posts })
export default connect(mapToProps)(PostsList)