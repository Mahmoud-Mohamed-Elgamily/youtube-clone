import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import './styles/home.css'
import axiosInstance from '../AXIOS/youtube'
import { VideosContext } from '../context/VideosContext'
import VideoPlayer from './VideoPlayer';

const Home = () => {
  let [videos, setVideos] = useState(null);
  useEffect(() => {
    axiosInstance.get('/videos', {
      params: {
        chart: 'mostPopular',
      }
    })
      .then(data => {
        setVideos(data.data.items)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {videos &&
        <VideosContext.Provider value={{ videos, setVideos }}>
          <Router>
            <Header />
            <div id="body">
              <Sidebar />
              <Route exact path="/video-player" component={VideoPlayer} />
              <Route exact path="/" component={Body} />
            </div>
          </Router>
        </VideosContext.Provider>
      }
    </>
  )
}

export default Home
