import React, { useState, useEffect } from 'react'
import './SideBar.css'
import SidebarButton from './SidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../Spotify';


const SideBar = () => {
const [image, setImage] = useState("./cookies.jpg")
  useEffect(()=>{
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);
    });
  },[])
  return (
    <div  className='sidebar-container' >
      <img src={image} className='profile-img' alt='profile'/>
      <div>
        <SidebarButton  title="Feed" to="/Feed" icon={<MdSpaceDashboard/>} />
        <SidebarButton title="Trending" to="/Trending" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/Player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorites" to="/Favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/Library" icon={<IoLibrary/>}/>
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}

export default SideBar