import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    marginBottom: 30
  },
  title: {
    marginBottom: 30
  }
}));

export default function Spotify() {
  const classes = useStyles();
  const [spotify, setSpotify] = useState("");

  useEffect(() => {
    axios
      .get("/api/spotify/token")
      .then(tokenRes => {
        const token = tokenRes.data.access_token;
        axios
          .get("https://api.spotify.com/v1/browse/categories/mood/playlists", {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then(res => {
            setSpotify(
              res.data.playlists.items[
                Math.floor(
                  Math.random() * Math.floor(res.data.playlists.items.length)
                )
              ].id
            );
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {spotify && (
        <div className={classes.root}>
          <Typography variant="h3" className={classes.title}>
            Music
          </Typography>
          <div className="weatspotifyher-data">
            <iframe
              src={`https://open.spotify.com/embed/playlist/${spotify}`}
              width="300"
              height="100"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
