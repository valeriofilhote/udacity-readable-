import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Default.css'
import { Sidebar, PostsList, Spinner } from '../../components'

class Default extends Component {
    // ***********************************
    // Hokks
    // ***********************************
    render() {
        const defaultView = (
            <div className="Default">
                <div className="sidebar__container text-center">
                    <Sidebar categories={this.props.categories} />
                </div>
                <div className="main__container" style={{ paddingLeft: 10 }}>
                    <PostsList />
                </div>
            </div>
        )
        const spinnerView = <div className="text-center"><Spinner /></div>

        return this.props.categories.length === 0 ? spinnerView : defaultView
    }
}
const mapToProps = ({ category: { categories, selectedCategory }, post: { posts } }) => ({ categories, selectedCategory, posts })

export default connect(mapToProps)(Default)