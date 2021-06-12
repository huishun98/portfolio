import React from 'react'
import { resumePdfTitle } from '../data';
import { Link } from "react-scroll";

export default function Navigation() {
    return (
        <div className="nav d-flex d-sm-none">
            <a className="card-link" href={"/" + resumePdfTitle} download>Resume</a>
            <Link
                to="projects"
                smooth={true}
                duration={300}
                className="card-link"
                offset={-40}
            >Projects</Link>
            <Link
                to="writing"
                smooth={true}
                duration={300}
                className="card-link"
            >Writing</Link>
            <Link
                to="contact"
                smooth={true}
                duration={300}
                className="card-link"
            >Contact</Link>
        </div>
    )
}
