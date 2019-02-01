import React from 'react'

import './TextArea.css'
import { InputLabel } from '../'

export default function TextArea({ label, value, onChange }) {
    return (
        <div className="TextArea">
            <InputLabel>{label}</InputLabel>
            <textarea
                rows="10"
                value={value}
                onChange={event => onChange(event.target.value)} />
        </div>
    )
}
