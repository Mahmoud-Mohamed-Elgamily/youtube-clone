import React from 'react'
import MenuItem from './MenuItem'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="side-bar">
      <Link to="/">
        <MenuItem Icon={HomeIcon} title="Home" />
      </Link>
      <MenuItem Icon={WhatshotIcon} title="Trending" />
      <MenuItem Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <MenuItem Icon={VideoLibraryIcon} title="Library" />
      <MenuItem Icon={HistoryIcon} title="History" />
      <MenuItem Icon={PlayCircleOutlineIcon} title="Your Videos" />
      <MenuItem Icon={WatchLaterIcon} title="Watch Later" />
      <MenuItem Icon={ExpandMoreIcon} title="Show More" />
      <hr />
    </div>
  )
}

export default Sidebar
