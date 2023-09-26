import React from "react";
import "./Topbelow.css";
import Menu from "./Menu";

function Topbelow() {
  return (
    <div>
      <div className="header">
        <div className="navigation-menu">
          <a href="/All">All</a>
          <a href="/TrendingNow">Trending Now</a>
          <a href="/OldStories">Old Stories</a>
          <a href="/NewStories">New Stories</a>
          <a href="/ModsAndGenre">Mods & Genre</a>
          <a href="/TopAlbum">Top Album</a>
          <a href="/TopPlaylists">Top Playlists</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>
    </div>
  );
}
export default Topbelow;
