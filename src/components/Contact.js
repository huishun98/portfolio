import React from 'react';
import { email } from '../data';

export default function Articles() {
    return (
        <div className="articles container-fluid section">
            <h2 className="section-header">CONTACT</h2>
            <p>Hit me up at <a href={"mailto:"+email} className="card-link">{email}</a> to enquire about collaboration.</p>
        </div>
    )
}
