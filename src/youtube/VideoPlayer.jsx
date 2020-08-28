import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axiosInstance from '../AXIOS/youtube';
import VideoWrapper from './VideoWrapper';
import './styles/videoPlayer.css'

const VideoPlayer = () => {
  const { location: { state: { id, channelTitle } } } = useHistory()
  const [recommendedVideos, SetrecommendedVideos] = useState(null)

  useEffect(() => {
    axiosInstance.get('/search', {
      params: {
        q: channelTitle
      }
    })
      .then(data => {
        console.log(data.data.items);

        SetrecommendedVideos(data.data.items)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div id="videoPlayerPage">
      <iframe title="youtube-player" allowFullScreen="1"
        src={'https://www.youtube.com/embed/' + id}>
      </iframe>
      <section>
        {recommendedVideos && recommendedVideos.map(
          video => {
            return (
              <>
              <VideoWrapper video={video} />
              <br/>
              </>
            )
          }
        )}
      </section>

    </div>
  )
}

export default VideoPlayer
