import React, { useState, useEffect } from "react";
import axios from "axios";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios("/api/news")
      .then(data => data.data)
      .then(news => setNews(news));
  }, []);

  return (
    <div>
      {news.map(article => (
        <div>
          <a href={article.url}>
            {article.image_url && <img src={article.image_url} />}
            <h1>{article.title}</h1>
          </a>
          <div>happiness: {article.happiness}</div>
          <div>{article.description}</div>
        </div>
      ))}
    </div>
  );
}
