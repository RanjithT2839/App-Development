import React from 'react';
import PodcastEpisode from './PodcastEpisode'; 
import './Dashboard.css'; 
import Taskbar from './Taskbar';
import Top from './Top';



function DashboardPage() {
  const episodes = [
    {
      id: 1,
      title: 'The Hunter And The Pigeons',
      description: 'Join us on a magical journey through the enchanted forest.',
      audioUrl: 'audio/episode1.mp3',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJkRI6V5jBgV5UgD9ZZ1_AM2fXaD6OcJh-w&usqp=CAU',
    },
    {
      id: 2,
      title: 'The Magic Pot',
      description: 'Captain Jack and his crew search for buried treasure.',
      audioUrl: 'audio/episode2.mp3',
      imageUrl: 'https://www.bacchonkasansar.com/wp-content/uploads/2023/08/images-6-5.jpeg',
    },
    {
      id: 3,
      title: 'The Little Red Hen',
      description: 'Discover the hidden wonders of the secret garden.',
      audioUrl: 'audio/episode3.mp3', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXlcXo5vW5IeMRITw0Az_nTgrh1r-VjIbQw&usqp=CAU', 
    },
    
  ];
  return (
    <div>
    <div className='task'>
      <Taskbar/> 
      </div>
      <div className='top'>
        <Top/>
      </div>
      <div className="dashboard">
      <h1>Kids Storytelling Podcast</h1>
      <div className="episode-list">
        {episodes.map((episode) => (
          <PodcastEpisode key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default DashboardPage;