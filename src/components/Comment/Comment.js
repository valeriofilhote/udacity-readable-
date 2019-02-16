import React, { Component } from 'react'
import { connect } from 'react-redux'

import { VoteCounter, EditDeleteBtns } from '../'
import { deleteComment, vote, selectedComment } from '../../actions/commet.actions'
import { showCommentModal } from '../../actions/navbar.actions'
import './Comment.css'

class Comment extends Component {
    // ***********************************
    // Events
    // ***********************************
    onDeleteClicked = () => {
        const { dispatch, comment: { id } } = this.props
        dispatch(deleteComment(id))
    }
    onVoteClicked = (option) => {
        // option: upVote or downVote
        const { dispatch, comment: { id } } = this.props
        dispatch(vote(id, option))
    }
    onEditClicked = () => {
        const { dispatch, comment } = this.props
        dispatch(selectedComment(comment))
        dispatch(showCommentModal(true))
    }
    // ***********************************
    // Life Cicle
    // ***********************************
    render() {
        const { body, author, voteScore } = this.props.comment
        return (
            <div className="Comment">
                <p>
                    {body}
                </p>
                <span>by: {author}</span>
                <div className="d-flex justify-between" style={{ marginTop: 10 }}>
                    <VoteCounter
                        onUpClicked={option => this.onVoteClicked(option)}
                        onDownClicked={option => this.onVoteClicked(option)}
                        score={voteScore} />
                    <EditDeleteBtns
                        onBtnEditClicked={this.onEditClicked}
                        onBtnDeleteClicked={this.onDeleteClicked} />
                </div>
            </div>
        )
    }
}

export default connect()(Comment)
