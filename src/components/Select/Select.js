import React from 'react'

import './Select.css'
import { InputLabel } from '../'

export default function Select({ label, items, value, onChange, disabled = false }) {
    return (
        <div className="Select">
            <InputLabel>{label}</InputLabel>
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
                disabled={disabled}>
                {
                    items.map(i => <option key={i.path} value={i.path}>{i.name}</option>)
                }
            </select>
        </div>
    )
}
