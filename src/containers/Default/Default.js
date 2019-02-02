import React, { Component } from 'react'

import './Default.css'
import { Sidebar, PostsList, Spinner } from '../../components'

export default class Default extends Component {
    render() {
        const categories = [
            {
                name: 'react',
                path: 'react'
            },
            {
                name: 'redux',
                path: 'redux'
            },
            {
                name: 'udacity',
                path: 'udacity'
            }
        ]
        return (
            // <div className="Default">
            //     <div className="sidebar__container text-center">
            //         <Sidebar categories={categories} activedMenuName="all" />
            //     </div>
            //     <div className="main__container" style={{ paddingLeft: 10 }}>
            //         <PostsList />
            //     </div>
            // </div>
            <div className="text-center"><Spinner /></div>
        )
    }
}
