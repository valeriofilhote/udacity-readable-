import React from 'react'

import './Sidebar.css'
import { CategoriesIcon } from '../../assets/icons'
export default function Sidebar({ categories, activedMenuName }) {
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
                    <li className={activedMenuName === 'all' ? 'font-bold font-color-primary' : 'font-color-primary'}>
                        All
                    </li>
                    {
                        categories.map(c => (
                            <li
                                key={c.name}
                                className={activedMenuName === c.name ? 'font-bold font-color-primary' : 'font-color-primary'}
                                style={{ textTransform: 'capitalize' }}>
                                {c.name}
                            </li>
                        ))
                    }
                </ul>
            </main>
        </div>
    )
}
