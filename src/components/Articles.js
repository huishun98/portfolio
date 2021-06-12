import React, { useState, useEffect } from 'react';
import * as Parser from 'rss-parser';

import { mediumUrl, mediumFilterKeyword } from '../data.js'

export default function Articles() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
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
        getFeed()
    }, []);

    return (
        <div className="articles container-fluid section" name="writing">
            <h2 className="section-header">WRITING</h2>
            <div className="section-body section-width top-bot-border-xs">
                {articles.map((article, index) => (
                    <a href={article.guid} target="_blank" rel="noopener noreferrer" className="long-card" key={index}>
                        <div className="long-card-body">
                            <h5 className="title">{article.title}</h5>
                            <p className="remarks">Published on {article['pubDate']}</p>
                            <div className="remarks">medium.com</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
