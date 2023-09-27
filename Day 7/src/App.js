import React from 'react';
import Login from './Login';
// import Signup from './signup';
// import PodcastEpisodeS from './PodcastEpisode';
import DashboardPage from './DashboardPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './signup';
 import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/dash" element={<DashboardPage/>}></Route>
    <Route path="/admin" element={<AdminLogin/>}></Route>
    <Route path="/addash" element={<AdminDashboard/>}></Route>
  
    </Routes>
    </BrowserRouter>
    
    </div>
    // <div className='App'>
    // <AdminDashboard/>
    // </div>
    );
  }
  
  export default App;