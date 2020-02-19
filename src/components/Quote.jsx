import React, { useState, useEffect } from "react";
import quotes from "../utils/quotes";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 275,
    minWidth: 275,
    padding: theme.spacing(2)
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  expandedQuote: {
    margin: 5
  },
  collapsedQuote: {
    margin: 5,
    maxHeight: 150,
    overflow: "hidden",
    position: "relative"
  },
  collapsedOverlay: {
    position: "absolute",
    height: 150,
    top: 0,
    bottom: 0,
    width: "100%",
    background:
      "-moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
    background:
      "-webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)",
    background:
      "linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)",
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 )"
  }
}));

export default function Quote() {
  const classes = useStyles();
  const [quote, setQuote] = useState("");
  const [collapsible, setCollapsible] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    quotes.get().then(quote => setQuote(quote));
  }, []);
  useEffect(() => {
    const height = document.getElementById("quote").clientHeight;
    setCollapsible(height > 150);
  }, [quote]);
  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <Container>
      <Card
        className={classes.root}
        onClick={toggleCollapse}
        style={collapsible ? { cursor: "pointer" } : {}}
      >
        <CardContent>
          <div>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Quote of the Day
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              className={
                collapsed && collapsible
                  ? classes.collapsedQuote
                  : classes.expandedQuote
              }
            >
              {collapsible && collapsed && (
                <div className={classes.collapsedOverlay} />
              )}
              <div id="quote">{quote.quote}</div>
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              - {quote.author}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
