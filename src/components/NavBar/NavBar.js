import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './NavBar.css'
import { NavItem, Button } from '../'
import {
    HomeActivedIcon, HomeNoActivedIcon, PostActivedIcon, PostNoActivedIcon,

} from '../../assets/icons'
import { navItemChange, showCommentModal } from '../../actions/navbar.actions'
import { selectPost } from '../../actions/post.actions'

class NavBar extends Component {
    state = {

    }
    // ***********************************
    // Events
    // ***********************************
    onBtnNewPostClicked = () => {
        this.props.dispatch(selectPost(null))
        this.props.history.push('/new-post')
    }
    onHomeNavItemClicked = () => {
        this.props.dispatch(navItemChange('Home'))
        this.props.history.push('/')
    }
    onBtnNewCommentClicked = () => {
        this.props.dispatch(showCommentModal(true))
    }
    // ***********************************
    // Hooks
    // ***********************************
    render() {

        return (
            <div className="NavBar">
                <div className="container d-flex justify-between">
                    <div> {this._getNavItems()} </div>
                    <div> {this._getButtons()}</div>
                </div>
            </div>
        )
    }
    // ***********************************
    // Helpers
    // ***********************************
    _getNavItems = () => {
        const { navitemSelected } = this.props

        if (navitemSelected === 'Home') {
            return (
                <NavItem
                    imageSrcActived={HomeActivedIcon}
                    imageSrcNoActived={HomeNoActivedIcon}
                    actived>
                    Home
                </NavItem>
            )
        } else {
            return (
                <React.Fragment>
                    <NavItem
                        imageSrcActived={HomeActivedIcon}
                        imageSrcNoActived={HomeNoActivedIcon}
                        onClick={this.onHomeNavItemClicked}>
                        Home
                    </NavItem>
                    <NavItem
                        imageSrcActived={PostActivedIcon}
                        imageSrcNoActived={PostNoActivedIcon}
                        actived>
                        {navitemSelected}
                    </NavItem>
                </React.Fragment>
            )
        }
    }
    _getButtons = () => {
        const { navitemSelected } = this.props

        if (navitemSelected === 'Home') {
            return (
                <div style={{ marginTop: 16, display: 'inline-block' }}>
                    <Button
                        style={{ marginTop: 20 }}
                        onClick={this.onBtnNewPostClicked}
                        color="#1DA1F2">
                        New Post
                    </Button>
                </div>
            )
        } if (navitemSelected === 'New Post' || navitemSelected === 'Editing Post') {
            return null
        } else {
            return (
                <div style={{ marginTop: 16, display: 'inline-block' }}>
                    <Button
                        style={{ marginTop: 20 }}
                        onClick={this.onBtnNewCommentClicked}
                        color="#F1A31D">
                        New Comment
                    </Button>
                </div>
            )
        }
    }
}

const mapToProps = ({ navbar }) => {
    return {
        navitemSelected: navbar.navitemSelected
    }
}

export default connect(mapToProps)(withRouter(NavBar))
