import React, { Component } from 'react'

import Header from './Header/Header'
import { Post } from '../../components'
import './PostsList.css'
export default class PostsList extends Component {
    render() {
        //bodyVisible
        return (
            <div className="PostsList">
                <Header />
                <main>
                    <ul>
                        <li><Post /></li>
                        <li><Post /></li>
                        <li><Post /></li>
                        <li><Post /></li>
                    </ul>
                </main>
            </div>
        )
    }
}
