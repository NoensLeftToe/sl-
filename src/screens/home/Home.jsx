import React, { useState, useEffect } from 'react';
import Feed from "../feed/Feed.jsx";
import Trending from '../trending/Trending.jsx';
import Player from '../player/Player.jsx';
import Library from '../library/Library.jsx';
import Favorites from '../favorites/Favorites.jsx';
import './Home.css';
import { setClientToken } from "../../Spotify.jsx";
import SideBar from "../../components/sidebar/SideBar.jsx";
import Login from '../auth/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = ""; // to extract token
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className='main-body'>
        <SideBar />
        <Routes>
          <Route path='/' element={<Library />} />
          <Route path='/Feed' element={<Feed />} />
          <Route path='/Trending' element={<Trending />} />
          <Route path='/Player' element={<Player />} />
          <Route path='/Favorites' element={<Favorites />} />
          <Route path='/Library' element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
