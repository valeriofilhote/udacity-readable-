import React, { Component } from 'react'

import './EditDeleteBtns.css'
import { EditIcon, DeleteIcon } from '../../assets/icons'

export default class EditDeleteBtns extends Component {
    // ***********************************
    // Events
    // ***********************************
    onBtnClicked = (type) => {
        // type : up or down
        console.log('type =>', type)

    }
    // ***********************************
    // Hooks
    // ***********************************
    render() {
        return (
            <div className="EditDeleteBtns">
                <div
                    className="btns__container"
                    onClick={() => this.onBtnClicked('edit')}>
                    <img
                        src={EditIcon}
                        alt="Edit Post or Comment icon" />
                </div>
                <div
                    className="btns__container"
                    onClick={() => this.onBtnClicked('delete')}>
                    <img
                        src={DeleteIcon}
                        alt="Delete Post or Comment icon" />
                </div>
            </div>
        )
    }
}
