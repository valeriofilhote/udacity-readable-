import React from 'react'

import './InputText.css'
import { InputLabel } from '../'
export default function InputText({ label, value, onChange, disabled = false }) {

    return (
        <div className="InputText">
            <InputLabel>{label}</InputLabel>
            <div>
                <input
                    disabled={disabled}
                    type="text"
                    value={value}
                    onChange={event => onChange(event.target.value)} />
            </div>
        </div>
    )
}
