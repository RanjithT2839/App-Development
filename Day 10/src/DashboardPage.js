import React from "react";
import PodcastEpisode from "./PodcastEpisode";
import "./Dashboard.css";
// import Taskbar from './Taskbar';
import Top from "./Top";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import Topbelow from "./Topbelow";

const images = [
  "https://wallpapers.com/images/high/po-and-little-panda-4k-cartoon-f05eupba6wvk234i.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyFjHQRYHN6ITJBU7bX-66nPfSuTufHm0PQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRQSwXJwlhV2gn3q9W32ATHZUI9dqDIlplA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyFjHQRYHN6ITJBU7bX-66nPfSuTufHm0PQ&usqp=CAU",
];

const episodes = [
  {
    id: 1,
    title: "The Adventure Begins",
    description: "Join us on a magical journey through the enchanted forest.",
    audioUrl: "audio/episode1.mp3",
    imageUrl: "https://image.smythstoys.com/zoom/205722_3.jpg",
  },
  {
    id: 2,
    title: "The Lost Treasure",
    description: "Captain Jack and his crew search for buried treasure.",
    audioUrl: "audio/episode2.mp3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKzvVzHlY0ptFxulYco-LNso6r_4fgdcUrQ&usqp=CAU",
  },
  {
    id: 3,
    title: "The Secret Garden",
    description: "Discover the hidden wonders of the secret garden.",
    audioUrl: "audio/episode3.mp3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmAvWzupUeFIPkx61O5rU2keD9R4UPlLt-YBZgvrEKCmfjsKVls0HZkDOWzRnznn7tuts&usqp=CAU",
  },
  {
    id: 4,
    title: "Dora Bujji",
    description: "Travel with Dora.",
    audioUrl: "audio/episode3.mp3",
    imageUrl:
      "https://i.playboard.app/p/c313a0177f6a16b825de0129ac4b4b63/default.jpg",
  },
  {
    id: 5,
    title: "When do hippos play",
    description: "When do hippos play.",
    audioUrl: "audio/episode3.mp3",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1d6ebd3f-333f-4a58-830f-9d834d6d3956/When+Do+Hippos+Play+Cover+Small+Thumbnail.jpeg",
  },
  {
    id: 6,
    title: "The lion and the mouse",
    description: "Story about the lion and mouse.",
    audioUrl: "audio/episode3.mp3",
    imageUrl:
      "https://www.supercoloring.com/sites/default/files/styles/drawing_full/public/fif/2021/12/the-lion-the-mouse-01-paper-crafts.jpg",
  },
];

function DashboardPage() {
  return (
    <div className="inpage1">
      <div>
        <Slideshow images={images} interval={5000} />
      </div>

      <div className="page-container">
        <div className="top">
          <Top />
        </div>

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

        <div className="dashboard1">
          <h1 className="kids"></h1>
          <div className="episode-list">
            {episodes.map((episode) => (
              <PodcastEpisode key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
