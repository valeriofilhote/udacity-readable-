import React, { Component } from 'react'

import { VoteCounter, EditDeleteBtns } from '../'
import './Comment.css'

export default class Comment extends Component {
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
                    <EditDeleteBtns />
                </div>
            </div>
        )
    }
}
