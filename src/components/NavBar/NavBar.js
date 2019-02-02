import React, { Component } from 'react'

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
                    <div>
                        <NavItem
                            imageSrcActived={HomeActivedIcon}
                            imageSrcNoActived={HomeNoActivedIcon}
                            actived>
                            Home
                        </NavItem>
                        <NavItem
                            imageSrcActived={PostActivedIcon}
                            imageSrcNoActived={PostNoActivedIcon}
                        >
                            Post
                        </NavItem>
                    </div>
                    <div>
                        <div style={{ marginTop: 16, display: 'inline-block' }}>
                            <Button
                                style={{ marginTop: 20 }}
                                onClick={this.onBtnNewPostClicked}
                                color="#1DA1F2">
                                New Post
                            </Button>
                        </div>
                        <div style={{ marginTop: 16, display: 'inline-block' }}>
                            <Button
                                style={{ marginTop: 20 }}
                                onClick={this.onBtnNewPostClicked}
                                color="#F1A31D">
                                New Comment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar
