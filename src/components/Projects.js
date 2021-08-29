import React, { useState } from 'react'
import { projects } from '../data.js'
import Fade from 'react-reveal/Fade';

export default function Projects() {

    const [filterArr, setFilterArr] = useState([])

    const toggleFilter = (tech) => {
        if (filterArr.indexOf(tech) > -1) {
            setFilterArr(filterArr.filter(x => x !== tech))
            return
        }
        setFilterArr(filterArr.concat([tech]))
    }


    return (
        <div className="projects container-fluid section" name="projects">
            <Fade bottom>
                <h2 className="section-header">PROJECTS</h2>
            </Fade>
            <div className="section-body section-width top-bot-border-sm">
                {projects.map((project, index) => {
                    if (filterArr.length > 0 &&
                        !filterArr.every(v => project.stack.includes(v))
                        // !filterArr.some(r=> project.stack.indexOf(r) >= 0)
                    ) {
                        return null
                    }
                    return (
                        <Fade bottom key={index}>
                            <div target="_blank" rel="noopener noreferrer" className="card-wrapper">
                                <div className="card text-white background-dark-lg mb-3">
                                    <img alt="" className="card-img-top object-top d-none d-md-block" src={require('../assets/' + project.imgName)} />
                                    <img alt="" className="card-img-left d-none d-sm-block d-md-none" src={require('../assets/' + project.imgName)} />
                                    <div className="card-body">
                                        <div>
                                            <h5 className="card-title">{project.title}</h5>
                                            <p
                                                className="card-text remarks"
                                            >{project.description}</p>
                                        </div>
                                        <div className="label-wrapper">
                                            {project.stack.map((tech, i) => (
                                                < span key={i} className={`label ${filterArr.indexOf(tech) > -1 ? "active" : ""}`} onClick={() => toggleFilter(tech)}> {tech}</span>
                                            ))}
                                        </div>
                                        <div>
                                            <a
                                                href={project.siteUrl}
                                                target="_blank" rel="noopener noreferrer"
                                                className="card-link"
                                            >Site</a>
                                            <a
                                                href={project.codeUrl}
                                                target="_blank" rel="noopener noreferrer"
                                                className={`card-link ${project.codeUrl ? "" : "disabled"}`}
                                            >Code</a>

                                            {/* {
                                        project.altCodeUrl !== undefined &&
                                        <a
                                            href={project.altCodeUrl}
                                            target="_blank" rel="noopener noreferrer"
                                            className="card-link"
                                        >More Code</a>
                                    } */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )
                }

                )}
            </div>
        </div >
    )
}
