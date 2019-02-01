import React, { Component } from 'react'

import Header from './Header/Header'

export default class PostsList extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    <ul>
                        <li>Post 1</li>
                        <li>Post 2</li>
                        <li>Post 3</li>
                    </ul>
                </main>
            </React.Fragment>
        )
    }
}
