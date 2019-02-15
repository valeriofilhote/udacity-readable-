import React, { Component } from 'react'
import { connect } from 'react-redux'

import { VoteCounter, EditDeleteBtns } from '../'
import { deleteComment } from '../../actions/commet.actions'
import './Comment.css'

class Comment extends Component {
    // ***********************************
    // Events
    // ***********************************
    onDeleteClicked = () => {
        const { dispatch, comment: { id } } = this.props
        dispatch(deleteComment(id))
    }
    onEditClicked = () => {

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
                    <VoteCounter score={voteScore} />
                    <EditDeleteBtns
                        onBtnEditClicked={this.onEditClicked}
                        onBtnDeleteClicked={this.onDeleteClicked} />
                </div>
            </div>
        )
    }
}

export default connect()(Comment)
