import React, { useState, useEffect } from 'react';
import * as Parser from 'rss-parser';


export default function Articles() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function getFeed() {
            let parser = new Parser();
            const rss = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@huishun98');
            console.log(rss.items)
            setArticles(rss.items)
        }
        getFeed()
    }, []);

    return (
        <div className="articles container-fluid section">
            <h2 className="section-header">ARTICLES</h2>
            <div className="section-body section-width">
                {articles.map((article, index) => (
                    <a href={article.guid} target="_blank" rel="noopener noreferrer" className="long-card" key={index}>
                        <div className="long-card-body">
                            <h5 className="title">{article.title}</h5>
                            <p className="remarks">{article['content:encodedSnippet'].substring(0, 197)}...</p>
                            <div className="remarks">medium.com</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
