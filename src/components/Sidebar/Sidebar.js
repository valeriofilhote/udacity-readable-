import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './Sidebar.css'
import { CategoriesIcon } from '../../assets/icons'


class Sidebar extends React.Component {
    render() {
        const { categories, selectedCategory } = this.props
        return (
            <div className="Sidebar d-inline-block"
                style={{ width: 170, textAlign: 'inherit' }}>
                <header
                    style={{ height: 18 }}
                    className="bck-color-primary font-color-white text-center p-y-1">
                    Categories
                </header>
                <div className="pos-relative d-inline-block" style={{ top: -10, left: 0 }}>
                    <img src={CategoriesIcon} alt="Categories List Icon" />
                </div>
                <main className="p-x-1 m-b-1">
                    <ul className="m-0">
                        <li className={selectedCategory === 'all' ? 'font-bold font-color-primary' : 'font-color-primary'}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>All</Link>
                        </li>
                        {
                            categories.map(c => (
                                <li
                                    key={c.name}
                                    className={selectedCategory === c.name ? 'font-bold font-color-primary' : 'font-color-primary'}
                                    style={{ textTransform: 'capitalize' }}>
                                    <Link to={`/${c.name}`} style={{ textDecoration: 'none', color: 'inherit' }}> {c.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </main>
            </div>
        )
    }
}
const mapToProp = ({ category: { categories, selectedCategory } }) => ({ categories, selectedCategory })
export default connect(mapToProp)(Sidebar)
