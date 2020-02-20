import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export default function Spotify() {
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

  if (!spotify) return <div></div>;

  return (
    <Container>
      <div className="weatspotifyher-data">
        <iframe
          src={`https://open.spotify.com/embed/playlist/${spotify}`}
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </Container>
  );
}
