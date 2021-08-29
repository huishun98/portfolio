import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip';
import { Link } from "react-scroll";
import { email, githubUrl, linkedInUrl, displayName, bannerDescription, resumePdfTitle } from '../data';

export default function Banner() {

    const [showTitle, setShowTitle] = useState(false)
    const [showButtons, setShowButtons] = useState(false)

    useEffect(() => {
        setShowTitle(true)
        setTimeout(() => {
            setShowButtons(true)
        }, 1300)
    }, [])

    return (
        <div className="banner">
            <ReactTooltip />
            <div className="background"></div>
            <div className="container-fluid banner-content">
                <div className="name-wrapper">
                    <h1 className={`name fade-left-md ${showTitle ? "show" : ""}`}>{displayName.toUpperCase()}</h1>
                    <p className={`section-description fade-right-md ${showTitle ? "show" : ""}`}>{bannerDescription}</p>
                </div>

                <div className={`delay-md ${showButtons ? "show" : ""}`}>
                    <a className="btn btn-dark btn-main d-none d-sm-block" href={"/" + resumePdfTitle} download>Download Resume</a>
                    <Link
                        className="btn btn-secondary d-none d-sm-block"
                        to="projects"
                        smooth={true}
                        duration={300}
                    >View Projects</Link>
                    <div className="social-media-buttons-group">
                        <a
                            href={githubUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="svg-link"
                            title="Github"
                            data-tip="Github"
                        >
                            <svg version="1.1" x="0px" y="0px"
                                viewBox="0 0 183 170">
                                <path style={{ fill: "#FFFFFF" }} d="M130.632 162.39C130.687 168.107 131.624 182.227 132.462 193.625C132.462 193.625 109.109 204.386 96.5 204C83.8913 203.614 60.442 196.703 60.442 196.703C60.606 185.551 60.815 171.221 60.797 169.519C60.533 169.355 33.003 177.43 21.159 157.957C19.275 154.789 16.216 143.673 7.959 137.519C7.659 137.274 1.568 134.242 1.004 131.256C0.94 130.837 1.395 129.963 1.996 129.745C2.615 129.527 12.657 125.512 23.845 139.359C27.214 143.993 34.833 161.781 61.489 150.784C62.199 148.044 63.629 141.726 72.095 139.996C32.403 135.372 7.75 116.472 1.587 81.432C-2.255 57.535 11.892 46.128 22.034 36.86C20.496 34.894 15.434 18.398 23.309 0.945993C31.839 -0.720007 47.488 5.25199 61.235 14.92C80.626 8.08299 112.534 9.85799 125.571 14.92C131.753 9.92199 153.875 -1.75801 163.361 0.972993C164.216 7.89099 165.245 23.632 164.617 36.914C176.97 49.331 183.926 64.717 182.724 82.214C181.285 112.939 161.266 136.19 119.198 139.713C129.794 146.841 130.268 158.002 130.632 162.39Z" fill="black" />
                            </svg>
                        </a>
                        <a
                            href={linkedInUrl}
                            target="_blank" rel="noopener noreferrer"
                            className="svg-link"
                            title="LinkedIn"
                            data-tip="LinkedIn"
                        >
                            <svg id="Bold" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                <path style={{ fill: "#FFFFFF" }} d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
                                <path style={{ fill: "#FFFFFF" }} d="m.396 7.977h4.976v16.023h-4.976z" />
                                <path style={{ fill: "#FFFFFF" }} d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
                            </svg>
                        </a>
                        <a href={"mailto:" + email} className="svg-link" title="Email" data-tip="Email">
                            <svg x="0px" y="0px"
                                viewBox="0 0 512 512">
                                <path style={{ fill: "#FFFFFF" }} d="M507.49,101.721L352.211,256L507.49,410.279c2.807-5.867,4.51-12.353,4.51-19.279V121
			C512,114.073,510.297,107.588,507.49,101.721z"/>
                                <path style={{ fill: "#FFFFFF" }} d="M467,76H45c-6.927,0-13.412,1.703-19.279,4.51l198.463,197.463c17.548,17.548,46.084,17.548,63.632,0L486.279,80.51
			C480.412,77.703,473.927,76,467,76z"/>
                                <path style={{ fill: "#FFFFFF" }} d="M4.51,101.721C1.703,107.588,0,114.073,0,121v270c0,6.927,1.703,13.413,4.51,19.279L159.789,256L4.51,101.721z" />
                                <path style={{ fill: "#FFFFFF" }} d="M331,277.211l-21.973,21.973c-29.239,29.239-76.816,29.239-106.055,0L181,277.211L25.721,431.49
			C31.588,434.297,38.073,436,45,436h422c6.927,0,13.412-1.703,19.279-4.51L331,277.211z"/>
                            </svg>
                        </a>
                    </div >

                </div>
            </div >
        </div >
    )
}
