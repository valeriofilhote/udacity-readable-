import React from 'react'

import './CloseButton.css'

export default function CloseButton({ onClick }) {
    return (
        <div className="CloseButton" onClick={onClick}>&times;</div>
    )
}
