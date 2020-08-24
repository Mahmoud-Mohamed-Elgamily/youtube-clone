import React, { useState, useContext } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import VideocamIcon from '@material-ui/icons/Videocam';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './styles/head.css'
import axiosInstance from '../AXIOS/youtube';
import { VideosContext } from '../context/VideosContext';

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const { setVideos } = useContext(VideosContext);

  const search = () => {
    axiosInstance.get('/search', {
      params: {
        q: searchValue
      }
    }).then(data => {
      setVideos(data.data.items)
    })
  }

  return (
    <div id="header">
      <div id="left">
        <MenuIcon />
        <YouTubeIcon />
      </div>
      <div id="center">
        <input type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => e.charCode == 13 ? search() : ''} />
        <SearchIcon onClick={() => search()} />
      </div>
      <div id="right">
        <VideocamIcon />
        <AppsIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>
    </div>
  )
}

export default Header
