import React from 'react'
import { format } from 'timeago.js';

export default function ReadableTimestamp({ children }) {
    const formattedDate = format(new Date(children))
    return (
        <small style={{ display: 'inline-block', marginLeft: 10, color: '#b4b4b4' }}>{formattedDate}</small>
    )
}
