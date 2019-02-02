import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Post.css'
import { CommentCounter, VoteCounter, EditDeleteBtns } from '../../components'

export default class Post extends Component {
    render() {
        const { bodyVisible } = this.props
        return (
            <div className="Post">
                <div className="Post__wrapper">
                    <div className="info-side">
                        <Link to="/post-detail" className="info-side__wrapper">
                            <span>by: Valerio F. Guimaraes</span>
                            <h5>Um forte abraço a todos e até breve! Deus no comando!</h5>
                            <p style={bodyVisible ? { display: 'block' } : { display: 'none' }}>
                                t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                        </Link>
                    </div>
                    <div className="control-side">
                        <EditDeleteBtns />
                    </div>
                </div>
                <div className="d-flex">
                    <CommentCounter />
                    <div className="d-inline-block m-l-2">
                        <VoteCounter />
                    </div>
                </div>
            </div>
        )
    }
}
