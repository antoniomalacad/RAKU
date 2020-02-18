const axios = require("axios");

module.exports = db => ({
  async get() {
    // get news articles
    let newsArticles = await axios.get(
      "https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?mkt=en-US&count=100",
      {
        headers: {
          "x-rapidapi-host":
            "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY
        }
      }
    );
    newsArticles = newsArticles.data.value.map(x => ({
      title: x.name,
      url: x.url,
      image_url: x.image ? x.image.thumbnail.contentUrl : "",
      description: x.description,
      category: x.category,
      created_at: x.datePublished
    }));

    // load sentiment scores
    let articleScores = await axios(
      "https://microsoft-azure-text-analytics-v1.p.rapidapi.com/sentiment",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "microsoft-azure-text-analytics-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.API_KEY,
          "content-type": "application/json",
          accept: "application/json"
        },
        data: {
          documents: newsArticles.map((x, i) => ({
            id: i,
            language: "en",
            text: x.description
          }))
        }
      }
    );
    articleScores = articleScores.data.documents;

    // filter news articles based on score
    const filteredNewsArticles = [];
    articleScores.forEach((x, i) => {
      if (x.score > 0.5)
        filteredNewsArticles.push({
          ...newsArticles[i],
          happiness: x.score
        });
    });
    console.log(newsArticles.length, "articles received");
    console.log(filteredNewsArticles.length, "happy articles found");
    return filteredNewsArticles;
  }
});
