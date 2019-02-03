import React from 'react'
import './NavItem.css'


export default function NavItem({
    imageSrcActived, imageSrcNoActived, children, actived, onClick
}) {
    const styles = {
        actived: {
            color: '#1DA1F2',
            borderBottom: '3px solid #1DA1F2'
        },
        noActived: {
            color: '#727272',
            borderBottom: 'none'
        }
    }
    return (
        <div
            className="NavItem"
            style={actived ? styles.actived : styles.noActived}
            onClick={onClick ? () => onClick(children) : () => { }}>
            <div className="content">
                <img
                    src={actived ? imageSrcActived : imageSrcNoActived}
                    alt="Main Navigation Bar Item Icon" />
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
