import React from 'react'

import './FormCard.css'

export default function FormCard({ children, minWidth }) {
    const style = minWidth ? { minWidth } : null
    return (
        <div className="FormCard" style={style}>
            {children}
        </div>
    )
}
