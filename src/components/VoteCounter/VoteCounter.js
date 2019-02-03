import React, { Component } from 'react'

import './VoteCounter.css'
import { ThumbUpIcon, ThumbDownIcon } from '../../assets/icons'

export default class VoteCounter extends Component {
    // ***********************************
    // Events
    // ***********************************
    onThumbClicked = (type) => {
        // type : up or down
        console.log('type =>', type)

    }
    // ***********************************
    // Hooks
    // ***********************************
    render() {
        const { score } = this.props
        return (
            <div className="VoteCounter">
                <div
                    className="thumb__container"
                    onClick={() => this.onThumbClicked('up')}>
                    <img
                        className="thumb-up"
                        src={ThumbUpIcon}
                        alt="Like Post or Comment icon" />
                </div>
                <label>{score}</label>
                <div
                    className="thumb__container"
                    onClick={() => this.onThumbClicked('down')}>
                    <img
                        className="thumb-down"
                        src={ThumbDownIcon} alt="Dislike Post or Comment icon" />
                </div>
            </div>
        )
    }
}
