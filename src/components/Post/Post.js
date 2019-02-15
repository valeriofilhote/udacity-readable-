import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


import './Post.css'
import {
    CommentCounter, VoteCounter, EditDeleteBtns,
    Badge, ReadableTimestamp
} from '../../components'
import { selectPost, vote, deletePost } from '../../actions/post.actions'

class Post extends Component {
    // ***********************************
    // Events
    // ***********************************
    onBtnEditClicked = () => {
        const { post, dispatch, history } = this.props
        dispatch(selectPost(post))
        history.push('/post-editing')
    }
    onBtnDeleteClicked = () => {
        const { post, dispatch, history } = this.props
        dispatch(deletePost(post.id))
        history.push('/')
    }
    onPostClicked = () => {
        const { post: { id, category }, dispatch } = this.props
        // Reset Actual Selected Post
        dispatch(selectPost(null))
        // Navigating ...
        this.props.history.push(`/post-detail/${category}/${id}`)
    }
    onVoteClicked = (option) => {
        // option: upVote or downVote
        const { dispatch, post: { id } } = this.props
        dispatch(vote(id, option))
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
                            onBtnEditClicked={this.onBtnEditClicked}
                            onBtnDeleteClicked={this.onBtnDeleteClicked} />
                    </div>
                </div>
                <div className="d-flex">
                    <CommentCounter counter={commentCount} />
                    <div className="d-inline-block m-l-2">
                        <VoteCounter
                            onUpClicked={option => this.onVoteClicked(option)}
                            onDownClicked={option => this.onVoteClicked(option)}
                            score={voteScore} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(withRouter(Post))