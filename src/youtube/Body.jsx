import React, { useContext } from 'react'
import VideoWrapper from './VideoWrapper'
import { Grid } from '@material-ui/core'
import axiosInstance from '../AXIOS/youtube'
import { VideosContext } from '../context/VideosContext'

const Body = () => {
  const {videos} = useContext(VideosContext);

  return (
    <div id="content">
      <div className="root">
        <Grid container spacing={2}>
          {videos.map(
            video => {
              return (
                <Grid item xs={3} key={video.id}>
                  <VideoWrapper video={video} />
                </Grid>
              )
            }
          )}
        </Grid>
      </div>
    </div>
  )
}

export default Body
