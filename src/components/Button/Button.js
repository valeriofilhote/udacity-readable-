import React from 'react'
import './Button.css'

export default function Button({ children, color, onClick }) {
    return (
        <button
            className="Button"
            style={{ backgroundColor: color }}
            onClick={onClick}>
            {children}
        </button>
    )
}
