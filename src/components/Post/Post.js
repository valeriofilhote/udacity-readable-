import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


import './Post.css'
import {
    CommentCounter, VoteCounter, EditDeleteBtns,
    Badge, ReadableTimestamp
} from '../../components'
import { getPostDetail, selectPost } from '../../actions/post.actions'

class Post extends Component {
    // ***********************************
    // Events
    // ***********************************
    onBtnEditClicked = () => {
        this.props.history.push('/post-editing')
    }
    onPostClicked = () => {
        const { post: { id }, dispatch } = this.props
        // Reset Actual Selected Post
        dispatch(selectPost(null))
        // Fecthing the New Post Detail
        dispatch(getPostDetail(id))

        this.props.history.push('/post-detail')
    }

    // ***********************************
    // Hooks
    // ***********************************
    render() {
        const { bodyVisible, post: { author, title, body, commentCount, voteScore, category, timestamp } } = this.props

        return (
            <div className="Post">
                <div className="Post__wrapper">
                    <div className="info-side">
                        <div className="info-side__wrapper" onClick={this.onPostClicked}>
                            <span>by: {author}</span>
                            <h5>{title}</h5>
                            <p style={bodyVisible ? { display: 'block' } : { display: 'none' }}>
                                {body}
                            </p>
                            <div>
                                <Badge>{category}</Badge>
                                <ReadableTimestamp>{timestamp}</ReadableTimestamp>
                            </div>
                        </div>
                    </div>
                    <div className="control-side">
                        <EditDeleteBtns
                            onBtnEditClicked={this.onBtnEditClicked} />
                    </div>
                </div>
                <div className="d-flex">
                    <CommentCounter counter={commentCount} />
                    <div className="d-inline-block m-l-2">
                        <VoteCounter score={voteScore} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(withRouter(Post))