import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

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
    height: 150,
    overflow: "hidden",
    flex: 1,
    textAlign: "left"
  },
  title: {
    fontSize: "1.5rem"
  },
  description: {
    fontSize: "1.2rem"
  },
  link: {
    textDecoration: "none",
    color: "#ff177c"
  }
}));

export default function News() {
  const classes = useStyles();
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios("/api/news")
      .then(data => data.data)
      .then(news => setNews(news));
  }, []);

  return (
    <Container style={{ marginTop: 20 }}>
      <Typography variant="h5" component="h2" style={{ color: "#fff" }}>
        Today's News
      </Typography>
      {news.map(article => (
        <Paper
          elevation={2}
          style={{
            display: "flex",
            marginTop: 10,
            overflow: "hidden",
            maxHeight: 150
          }}
        >
          <CardMedia
            image={article.image_url}
            title={article.title}
            style={{ width: 100 }}
          />
          <CardContent className={classes.content}>
            <a href={article.url} className={classes.link}>
              <Typography variant="body1" className={classes.title}>
                {article.title}
              </Typography>
            </a>
            <Typography color="textSecondary" gutterBottom>
              <div>happiness: {article.happiness}</div>
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.description}
            >
              {article.description}
            </Typography>
          </CardContent>
        </Paper>
      ))}
    </Container>
  );
}
