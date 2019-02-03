import React from 'react'

import './CommentCounter.css'
import { CommentIcon } from '../../assets/icons'


export default function CommentCounter({ counter }) {
    return (
        <div className="CommentCounter">
            <img src={CommentIcon} alt="Comment Counter Icon" width="18" />
            <label>{counter}</label>
        </div>
    )
}
