import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './styles/wrapper.css'
import { Link } from 'react-router-dom';

const VideoWrapper = ({ video }) => {
  let days = Math.ceil((new Date().getTime() - new Date(video.snippet.publishedAt).getTime()) / (1000 * 60 * 60 * 24));
  return (
    <div className="video-wrapper" key={video.id.vRXZj0DzXIA}>
      <Link to={{
        pathname: "/video-player",
        state: {
          id: video.id,
          channelTitle: video.snippet.channelTitle,
        }
      }} >
        <img className="thumbnail" src={video.snippet.thumbnails.high.url} alt={video.snippet.description} />
      </Link>
      <div className="footer">
        <Avatar className="avatar" alt="Remy Sharp" src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png" />
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
