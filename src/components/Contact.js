import React from 'react';
import { email } from '../data';

import Fade from 'react-reveal/Fade';

export default function Articles() {
    return (
        <div className="contact container-fluid section" name="contact">
            <Fade bottom>
                <h2 className="section-header">CONTACT</h2>
            </Fade>
            <Fade bottom>
                <p>Hit me up at <a href={"mailto:" + email} className="card-link">{email}</a> to enquire about collaboration.</p>
            </Fade>
        </div>
    )
}
