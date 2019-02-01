import React, { Component } from 'react'

import './CommentCounter.css'
import { CommentIcon } from '../../assets/icons'


export default class CommentCounter extends Component {
    render() {
        return (
            <div className="CommentCounter">
                <img src={CommentIcon} alt="Comment Counter Icon" width="18" />
                <label>1</label>
            </div>
        )
    }
}
