import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './styles/wrapper.css'

const VideoWrapper = ({ video }) => {
  let days = Math.ceil((new Date().getTime() - new Date(video.snippet.publishedAt).getTime()) / (1000 * 60 * 60 * 24));
  return (
    <div className="video-wrapper">
      <img src={video.snippet.thumbnails.high.url} alt={video.snippet.description} />
      <div className="footer">
        <Avatar className="avatar" alt="Remy Sharp" src="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo" />
        <div className="details">
          <h2>{video.snippet.title.substring(0, 50)} {video.snippet.title.length > 50 ? '...' : ''}</h2>
          <p>{video.snippet.channelTitle}</p>
          <p>23K views</p>
          <p>{days} {days > 1 ? 'days' : 'day'} ago</p>
        </div>
      </div>
    </div>
  )
}

export default VideoWrapper
