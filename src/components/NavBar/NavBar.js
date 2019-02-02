import React, { Component } from 'react'
import { connect } from 'react-redux'

import './NavBar.css'
import { NavItem, Button } from '../'
import {
    HomeActivedIcon, HomeNoActivedIcon, PostActivedIcon, PostNoActivedIcon,

} from '../../assets/icons'

class NavBar extends Component {
    state = {

    }
    // ***********************************
    // Events
    // ***********************************
    onBtnNewPostClicked = () => {

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
                        imageSrcNoActived={HomeNoActivedIcon}>
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
        } else {
            return (
                <div style={{ marginTop: 16, display: 'inline-block' }}>
                    <Button
                        style={{ marginTop: 20 }}
                        onClick={this.onBtnNewPostClicked}
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

export default connect(mapToProps)(NavBar)
