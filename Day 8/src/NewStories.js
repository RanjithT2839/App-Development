import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import Top from "./Top";
import Topbelow from "./Topbelow";
import "./NewStories.css";
import Footer from "./Footer";
//import DownFooter from './DownFooter';

const stories = [
  {
    id: 1,
    title: "The Lion And The Mouse",
    description: "Never Under Estimate Anyone.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEadoeOPAtcc2-uMOekk91nOKoNAYCUPDmDA&usqp=CAU",
    audioUrl: "forest-story.mp3",
  },
  {
    id: 2,
    title: "The Golden Egg",
    description: "We should never be greedy.",
    imageUrl:
      "https://storiespub.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-07-at-1.13.04-PM-1024x571.webp",
    audioUrl: "pirate-story.mp3",
  },
  {
    id: 3,
    title: "The Farmer And Well",
    description: "Cheating is not a life.",
    imageUrl:
      "https://www.shortstories4kids.com/wp-content/uploads/2023/08/The-Farmer-and-the-well.jpg",
    audioUrl: "pirate-story.mp3",
  },
  {
    id: 4,
    title: "Thomas And Friends",
    description: "Its always good.",
    imageUrl: "https://deadline.com/wp-content/uploads/2020/02/thomas.png",
    audioUrl: "pirate-story.mp3",
  },
  {
    id: 5,
    title: "The Magic Pencil",
    description: "we should do our work.",
    imageUrl: "https://slideplayer.com/4540688/15/images/slide_1.jpg",
    audioUrl: "pirate-story.mp3",
  },
  {
    id: 6,
    title: "Cinderella",
    description: "Kindness will be rewarded.",
    imageUrl:
      "https://www.shortstoriesforkids.net/wp-content/uploads/2018/10/cinderella-story-s.jpg",
    audioUrl: "pirate-story.mp3",
  },
];

const Story = ({ title, description, imageUrl, audioUrl }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="story">
      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? <StarRateIcon color="error" /> : <StarRateIcon />}
      </div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

function NewStories() {
  return (
    <>
      <div className="bc">
        <div>
          <Top />
        </div>
        <div>
          <Topbelow />
        </div>
        <div className="new-stories">
          <h1 className="fs">New Stories for Kids</h1>
          <div className="story-container">
            {stories.map((story) => (
              <Story
                key={story.id}
                title={story.title}
                description={story.description}
                imageUrl={story.imageUrl}
                audioUrl={story.audioUrl}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

//    <DownFooter/>
export default NewStories;
