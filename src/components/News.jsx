import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    minWidth: 250,
    minHeight: 300,
    maxHeight: 300,
    margin: theme.spacing(2),
    justifyContent: "center"
  },
  content: {
    maxHeight: 300,
    overflow: "hidden"
  }
}));

/*
This is the images I cut out
<CardMedia className={classes.media}>
<a href={article.url}>
  {article.image_url && <img src={article.image_url} />}
</a>
</CardMedia>

*/

export default function News() {
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios("/api/news")
      .then(data => data.data)
      .then(news => setNews(news));
  }, []);

  return (
    <div>
      <Typography variant="h3">News</Typography>
      <Grid
        container
        display="flex"
        flexDirection="row"
        spacing={1}
        justifyContent="center"
      >
        {news.map(article => (
          <Grid item xs={"auto"} className={classes.root}>
            <Card className={classes.root}>
              <div
                style={{
                  width: "100%",
                  height: 100,
                  background:
                    "linear-gradient(45deg, rgba(255,23,124,1) 0%, rgba(100,171,255,1) 69%)"
                }}
              ></div>
              <CardContent className={classes.content}>
                <a href={article.url}>
                  <Typography variant="body1">{article.title}</Typography>
                </a>
                <Typography color="textSecondary" gutterBottom>
                  <div>happiness: {article.happiness}</div>
                </Typography>
                <Typography variant="body2" component="p">
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
