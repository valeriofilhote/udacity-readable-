import React, { Component } from 'react'

import './PostDetail.css'
import { Post, Comment } from '../../components'

export default class PostDetail extends Component {
    render() {
        return (
            <div className="PostDetail">
                <Post bodyVisible />
                <div className="m-t-1 comment__container">
                    <Comment />
                </div>
                <div className="m-t-1 comment__container">
                    <Comment />
                </div>
                <div className="m-t-1 comment__container">
                    <Comment />
                </div>
                <div className="m-t-1 comment__container">
                    <Comment />
                </div>
            </div>
        )
    }
}
