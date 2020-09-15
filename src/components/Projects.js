import React, { useState } from 'react'

export default function Projects() {

    const [collapsed, setCollapsed] = useState({
        narie: false
    })

    const toggle = (ref, e) => {
        e.preventDefault()
        console.log(ref)
        let update = {}
        update[ref] = !collapsed.narie
        setCollapsed(update)
    }

    return (
        <div className="projects container-fluid section" id="section1">
            <h2 className="section-header">PROJECTS</h2>
            <div className="section-body section-width">
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top object-top" src={require("../assets/songdedi.png")} />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">SongDedi</h5>
                                <p
                                    className="card-text description"
                                >A free song dedication service suitable for weddings, parties or any event.</p>
                                <p
                                    className="card-text"
                                >Anyone can contribute to your playlist. Your playlist will update in real time.</p>
                                <p className="card-text">
                                    Built using
                    <span className="highlight margin-left-5">Vue.js (JavaScript)</span> and
                    <span className="highlight margin-left-5">Flask (Python)</span>.
                    Google authentication, data storage and media storage done using
                    <span
                                        className="highlight margin-left-5"
                                    >Firebase</span>.
                    Hosted on
                    <span className="highlight margin-left-5">Heroku</span>. Integrated with
                    <span className="highlight margin-left-5">Google Analytics</span>.
                  </p>
                            </div>

                            <div className="flex-col">
                                <a
                                    href="https://songdedi-admin.herokuapp.com/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Live Site</a>
                                <a
                                    href="https://github.com/huishun98/songdedi-admin"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Code (Admin site)</a>
                                <a
                                    href="https://github.com/huishun98/songdedi-requests"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Code (Request site)</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top object-top" src={require("../assets/narie.png")} />
                        <div className="card-body">
                            <h5 className="card-title">Narie</h5>
                            <p
                                className="card-text description"
                            >A beginner-friendly itinerary planner, perfectly customisable to suit your needs.</p>
                            <p
                                className="card-text"
                            >Leading a team of three (and growing). Following Agile development practices.</p>
                            <p className="card-text">
                                Prototyped using
                  <span className="highlight margin-left-5">Figma</span>.
                  Built using
                  <span className="highlight margin-left-5">Vue.js (JavaScript)</span> and
                  <span className="highlight margin-left-5">Flask (Python)</span>.
                  JWT authentication and data storage done using
                  <span
                                    className="highlight margin-left-5"
                                >Firebase</span>.
                  Hosted on
                  <span className="highlight margin-left-5">Heroku</span>. Integrated with
                  <span className="highlight margin-left-5">Google Analytics</span>.
                </p>
                            <div className={`collapsed ${collapsed.narie ? "active" : ""}`}>
                                <p className="card-text">
                                    <span>Used</span>
                                    <a
                                        href="https://docs.mapbox.com/api/search/"
                                        target="_blank" rel="noopener noreferrer"
                                        className="highlight card-link"
                                    >Mapbox Geocoding API</a>
                                    <span>for search autocomplete,</span>
                                    <a
                                        href="https://www.triposo.com/api/documentation/20200803/"
                                        target="_blank" rel="noopener noreferrer"
                                        className="highlight card-link"
                                    >Triposo API</a>
                                    <span>to suggest tours and places of interest, and</span>
                                    <a
                                        href="https://developers.google.com/maps/documentation/directions/overview"
                                        target="_blank" rel="noopener noreferrer"
                                        className="highlight card-link"
                                    >Google Maps Directions API</a>
                                    <span>to calculate travelling time.</span>
                                </p>
                                <p className="card-text margin-bot">
                                    <span>Used</span>
                                    <a
                                        href="https://scikit-learn.org/stable/index.html"
                                        target="_blank" rel="noopener noreferrer"
                                        className="highlight card-link"
                                    >scikit-learn (Python library)</a>
                                    <span>to conduct clustering and</span>
                                    <a
                                        href="https://pypi.org/project/mlrose/"
                                        target="_blank" rel="noopener noreferrer"
                                        className="highlight card-link"
                                    >mlrose (Python package)</a>
                                    <span>to solve the travelling salesman problem to suggest an optimized itinerary.</span>
                                </p>
                            </div>

                            <p className="card-text">Code is private.</p>
                            <div className="margin-bot">
                                <a href="/#" className="card-link" onClick={(e) => toggle('narie', e)}>
                                    <span className="margin-right">{collapsed.narie ? 'Less' : 'More'}</span> info
                  </a>
                            </div>
                            <div>
                                <a href="https://narie.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link">Live Site</a>
                                <a
                                    href="https://github.com/Project-Narie/narie_ui"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link disabled"
                                >Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top" src={require("../assets/django_blog.png")} />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">Customisable Personal Blog/Website Template</h5>
                                <p
                                    className="card-text description"
                                >A template that gives content creators full control over the design of their site and content management system.</p>
                                <p
                                    className="card-text"
                                >Features include basic CRUD functionality, downloading and uploading of blog content for backup purposes as well as categorisation of posts.</p>
                                <p className="card-text">
                                    Built using
                    <span className="highlight margin-left-5">Django (Python)</span> and
                    <span className="highlight margin-left-5">vanilla JavaScript</span>. Data and media stored using
                    <span className="highlight margin-left-5">PostgreSQL</span> and hosted on
                    <span className="highlight margin-left-5">Amazon S3</span>. Application hosted on
                    <span className="highlight margin-left-5">Heroku</span>.
                  </p>
                            </div>
                            <div>
                                <a href="https://hs-django-blog.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link">Demo</a>
                                <a
                                    href="https://github.com/huishun98/django_blog"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top" src={require("../assets/springer_books.png")} />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">Springer Books Navigator</h5>
                                <p
                                    className="card-text description"
                                >An easy and fast way to download free books offered by Springer.</p>
                                <p className="cart-text">Acquired 186 users from 10 countries.</p>
                                <p className="card-text">
                                    Data scraped using
                    <span className="highlight margin-left-5">BeautifulSoup (Python)</span>. Website built using
                    <span className="highlight margin-left-5">Vue.js (JavaScript)</span>. Hosted on
                    <span className="highlight margin-left-5">Heroku</span>. Integrated with
                    <span className="highlight margin-left-5">Google Analytics</span>.
                  </p>
                            </div>
                            <div>
                                <a
                                    href="https://springer-books-links.herokuapp.com/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Live Site</a>
                                <a
                                    href="https://github.com/huishun98/springer-books"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top" src={require("../assets/cb_quiz.png")} />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">Circuit Breaker Personality Quiz</h5>
                                <p
                                    className="card-text description"
                                >A personality quiz about attitudes and feelings about the Circuit Breaker.</p>
                                <p className="card-text">More than 400 responses were garnered within 24 hours of launch.</p>
                                <p className="card-text">
                                    Built using
                    <span className="highlight margin-left-5">Vue.js (JavaScript)</span> and
                    <span className="highlight margin-left-5">Flask (Python)</span>. Used
                    <span className="highlight margin-left-5">Google Sheets API</span> to store results in Google Sheets. Hosted on
                    <span className="highlight margin-left-5">Heroku</span>.
                  </p>
                            </div>
                            <div>
                                <a
                                    href="https://circuit-breaker-personality.herokuapp.com/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Live Site</a>
                                <a
                                    target="_blank" rel="noopener noreferrer"
                                    href="https://github.com/huishun98/trivia-quiz-client"
                                    className="card-link"
                                >Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top" src={require("../assets/huishun-cf.png")} />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">HS Coding Factory</h5>
                                <p
                                    className="card-text description"
                                >A WordPress theme and site for me to document and share my coding journey.</p>
                                <p className="card-text">
                                    Built using
                    <span className="highlight margin-left-5">PHP</span> and
                    <span className="highlight margin-left-5">jQuery (JavaScript)</span>. Hosted on
                    <span className="highlight margin-left-5">Heroku</span>.
                  </p>
                            </div>
                            <div>
                                <a
                                    href="https://huishun-cf.herokuapp.com/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Live Site</a>
                                <a
                                    href="https://github.com/huishun98/huishun-cf"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top" src={require("../assets/data_viz.png")} />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">Data visualisation</h5>
                                <p
                                    className="card-text description"
                                >Visualisations of Singapore's National Track and Field Championships A Division 100m and 200m results over the years.</p>
                                <p className="card-text">
                                    Used
                    <span className="highlight margin-left-5">Matplotlib (Python)</span>.
                  </p>
                            </div>
                            <div>
                                <a
                                    href="https://github.com/huishun98/tf-data-viz/blob/master/data_viz.ipynb"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Demo</a>
                                <a
                                    href="https://github.com/huishun98/tf-data-viz"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top" src={require("../assets/telebot.png")} />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">Happy Dinner Bot</h5>
                                <p
                                    className="card-text description"
                                >A Telegram bot that helps to organise dinners every day.</p>
                                <p className="card-text">
                                    Built using
                    <span className="highlight margin-left-5">Node.js (JavaScript)</span>. Data stored on
                    <span className="highlight margin-left-5">AWS with MongoDB Atlas</span>. Hosted on
                    <span className="highlight margin-left-5">Heroku</span>.
                  </p>
                            </div>
                            <div>
                                <a
                                    href="https://web.telegram.org/#/im?p=@happy_dinner_bot"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Live Site</a>
                                <a
                                    href="https://github.com/huishun98/happy-dinner-bot-public"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card text-white bg-dark mb-3">
                        <img alt="" className="card-img-top" src={require("../assets/portfolio.png")} />
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">HS Portfolio</h5>
                                <p className="card-text description">A portfolio website.</p>
                                <p className="card-text">
                                    Built using
                    <span className="highlight margin-left-5">React.js (JavaScript)</span>.
                    Hosted on
                    <span className="highlight margin-left-5">Heroku</span>.
                  </p>
                            </div>
                            <div>
                                <a
                                    href="https://hs-portfolio.herokuapp.com/"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Live Site</a>
                                <a
                                    href="https://github.com/huishun98/portfolio"
                                    target="_blank" rel="noopener noreferrer"
                                    className="card-link"
                                >Code</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
