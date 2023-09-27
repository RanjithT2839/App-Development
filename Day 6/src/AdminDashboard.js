import React from 'react';
import PodcastEpisode from './PodcastEpisode'; 
import './AdminDashboard.css'; 
import Taskbar from './Taskbar';
import Top from './Top';



function AdminDashboard() {
  const episodes = [
    
    
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

export default AdminDashboard;