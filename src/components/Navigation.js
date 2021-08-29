import React, { useEffect, useLayoutEffect, useState } from 'react'
import { resumePdfTitle } from '../data';
import { Link } from "react-scroll";

export default function Navigation() {

    const [top, setTop] = useState(true)
    const [safari, setSafari] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 0 && top) {
            setTop(false)
        } else if (window.scrollY <= 0) {
            setTop(true)
        }
    }

    useLayoutEffect(() => {
        if (window.innerWidth >= 576) {
            window.addEventListener('scroll', handleScroll)
        }
    })

    useEffect(() => {
        if (window.safari !== undefined) {
            setSafari(true)
        }
    })

    return (
        <div className={`nav d-flex ${top ? "" : "opaque"}`}>
            <div className={`d-none d-sm-block logo ${top ? "" : "show"}`}>HUI SHUN</div>
            <a className="card-link d-sm-none" href={"/" + resumePdfTitle} download>Resume</a>
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
                className={`card-link ${safari ? "d-none" : ""}`}
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
