import React, { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import './styles/home.css'
import axiosInstance from '../AXIOS/youtube'
import { VideosContext } from '../context/VideosContext'

const Home = () => {
  let [videos, setVideos] = useState(null);
  useEffect(() => {
    axiosInstance.get('/videos', {
      params: {
        chart: 'mostPopular',
      }
    })
      .then(data => {
        console.log(data.data.items);
        setVideos(data.data.items)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {videos &&
        <VideosContext.Provider value={{videos, setVideos}}>
          <Header />
          <div id="body">
            <Sidebar />
            <Body />
          </div>
        </VideosContext.Provider>
      }
    </>
  )
}

export default Home
