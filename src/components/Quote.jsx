import React, { useState, useEffect } from "react";
import quotes from "../utils/quotes";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Quote() {
  const classes = useStyles();
  const [quote, setQuote] = useState("");
  useEffect(() => {
    quotes.get().then(quote => setQuote(quote));
  }, []);

  /*
  TODO: 
  1. Update card width
  */
  return (
    <Card className={classes.root}>
      <CardContent>
        <div>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Quote of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            {quote.quote}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            - {quote.author}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
