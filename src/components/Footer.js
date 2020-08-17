import React from 'react'

export default function Footer() {

    const defaultYear = () => {
        const today = new Date();
        return today.getFullYear()
    }

    return (
        <div>
            <div className="line"></div>
            <div className="footer">
                © {defaultYear()} Hui Shun
        </div>
        </div>
    )
}
