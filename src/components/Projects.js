import React, { useState } from 'react'
import { projects } from './data.js'

export default function Projects() {

    const [filterArr, setFilterArr] = useState([])

    // const [collapsed, setCollapsed] = useState({
    //     narie: false
    // })

    const toggleFilter = (tech) => {
        if (filterArr.indexOf(tech) > -1) {
            setFilterArr(filterArr.filter(x => x !== tech))
            return
        }
        setFilterArr(filterArr.concat([tech]))
    }


    // const toggle = (ref, e) => {
    //     e.preventDefault()
    //     console.log(ref)
    //     let update = {}
    //     update[ref] = !collapsed.narie
    //     setCollapsed(update)
    // }

    return (
        <div className="projects container-fluid section" id="section1">
            <h2 className="section-header">PROJECTS</h2>
            <div className="section-body section-width">

                {projects.map((project, index) => {
                    if (filterArr.length > 0 &&
                        !filterArr.every(v => project.stack.includes(v))
                        // !filterArr.some(r=> project.stack.indexOf(r) >= 0)
                    ) {
                        return null
                    }
                    return (
                        <div target="_blank" rel="noopener noreferrer" className="card-wrapper" key={index}>
                            <div className="card text-white bg-dark mb-3">
                                <img alt="" className="card-img-top object-top" src={require('../assets/' + project.imgName)} />
                                <div className="card-body">
                                    <div>
                                        <h5 className="card-title">{project.title}</h5>
                                        <p
                                            className="card-text remarks"
                                        >{project.description}</p>
                                    </div>
                                    <div>
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
                    )
                }

                )}
            </div>
        </div >
    )
}

// {/* <a href="/#" className="card-link" onClick={(e) => toggle('narie', e)}>
// <span className="margin-right">{collapsed.narie ? 'Less' : 'More'}</span> info
// </a> */}