import React from 'react'
import { connect } from 'react-redux'

import { sortPostBy } from '../../../actions/post.actions'
import './Header.css'

class Header extends React.Component {
    // ***********************************
    // Events
    // ***********************************
    onSortedByChange = (value) => {
        this.setState({ sortedby: value })
        this.props.dispatch(sortPostBy(value))
    }
    // ***********************************
    // Hooks
    // ***********************************
    constructor(props) {
        super(props)
        this.state = {
            sortedby: props.sortedBy
        }
    }
    render() {
        const { selectedCategory } = this.props
        return (
            <nav
                className="Header bck-color-primary-light d-flex justify-between"
                style={{ height: 28, padding: '11px 20px' }}>
                <div className="controls__container">
                    <div className="d-inline-block">
                        <label className="sortedByLabel" htmlFor="byDate">
                            <input
                                id="byDate"
                                type="radio"
                                name="sortedby"
                                value="byDate"
                                onChange={event => this.onSortedByChange(event.target.value)}
                                checked={this.state.sortedby === 'byDate'} />
                            By Date
                        </label>
                    </div>
                    <div className="d-inline-block m-l-1">
                        <label className="sortedByLabel" htmlFor="byVoteScore">
                            <input
                                id="byVoteScore"
                                type="radio"
                                name="sortedby"
                                value="byVoteScore"
                                onChange={event => this.onSortedByChange(event.target.value)}
                                checked={this.state.sortedby === 'byVoteScore'} />
                            By Vote Score
                        </label>
                    </div>
                </div>
                <div className="controls__container">
                    <label>Category:</label>
                    <span className="selectedCategory">{selectedCategory}</span>
                </div>
            </nav>
        )
    }
}

const mapToProps = ({ category: { selectedCategory }, post: { sortedBy } }) => ({ selectedCategory, sortedBy })
export default connect(mapToProps)(Header)
