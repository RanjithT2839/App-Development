import React from "react";
import Login from "./Login";
import SignupPage from "./SignupPage";
import PodcastEpisodeS from "./PodcastEpisode";
import DashboardPage from "./DashboardPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import DashAdm from "./DashAdm";
import NewStories from "./NewStories";
import FAQ from "./FAQ";
import AboutUs from "./AboutUs";
import Policy from "./Policy";
import HomePage from "./HomePage";
import TandC from "./Tandc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/dash" element={<DashboardPage />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/addash" element={<DashAdm />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/podcastepisodes" element={<PodcastEpisodeS />}></Route>
          <Route path="/newstories" element={<NewStories />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/tac" element={<TandC />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
