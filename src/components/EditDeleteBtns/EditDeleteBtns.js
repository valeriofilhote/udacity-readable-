import React, { Component } from 'react'

import './EditDeleteBtns.css'
import { EditIcon, DeleteIcon } from '../../assets/icons'

export default class EditDeleteBtns extends Component {
    // ***********************************
    // Events
    // ***********************************

    // ***********************************
    // Hooks
    // ***********************************
    render() {
        return (
            <div className="EditDeleteBtns">
                <div
                    className="btns__container"
                    onClick={this.props.onBtnEditClicked}>
                    <img
                        src={EditIcon}
                        alt="Edit Post or Comment icon" />
                </div>
                <div
                    className="btns__container"
                    onClick={this.props.onBtnDeleteClicked}>
                    <img
                        src={DeleteIcon}
                        alt="Delete Post or Comment icon" />
                </div>
            </div>
        )
    }
}
