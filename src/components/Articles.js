import React, { useState, useEffect } from 'react';
import * as Parser from 'rss-parser';
import { mediumUrl, mediumFilterKeyword } from '../data.js'
import Fade from 'react-reveal/Fade';

export default function Articles() {

    const [articles, setArticles] = useState([])

    async function getFeed() {
        let parser = new Parser();
        const rss = await parser.parseURL(mediumUrl);
        // https://cors-anywhere.herokuapp.com/ - outdated
        // https://api.allorigins.win/raw?url=
        // https://thingproxy.freeboard.io/fetch/ - requests and responses are both limited to 100,000 characters each
        const articles = rss.items
            .filter(articleDetail => articleDetail.categories.indexOf(mediumFilterKeyword) > -1)
            .slice(0, 5)
        // console.log(rss.items)
        setArticles(articles)
    }

    useEffect(() => {
        if (window.safari !== undefined) {
            return undefined
        }
        getFeed()
    }, []);

    if (window.safari !== undefined) {
        return null
    }

    return (
        <div className="articles container-fluid section" name="writing">
            <Fade bottom>
                <h2 className="section-header">WRITING</h2>
            </Fade>
            <div className="section-body section-width top-bot-border-xs">
                {articles.map((article, index) => (
                    <Fade bottom key={index}>
                        <a href={article.guid} target="_blank" rel="noopener noreferrer" className="long-card">
                            <div className="long-card-body">
                                <h5 className="title">{article.title}</h5>
                                <p className="remarks">Published on {article['pubDate']}</p>
                                <div className="remarks">medium.com</div>
                            </div>
                        </a>
                    </Fade>
                ))}
            </div>
        </div>
    )
}
