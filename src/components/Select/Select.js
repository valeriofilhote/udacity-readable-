import React from 'react'

import './Select.css'
import { InputLabel } from '../'

export default function Select({ label, items, value, onChange }) {
    return (
        <div className="Select">
            <InputLabel>{label}</InputLabel>
            <select value={value} onChange={event => onChange(event.target.value)}>
                {
                    items.map(i => <option key={i.label} value={i.label}>{i.name}</option>)
                }
            </select>
        </div>
    )
}