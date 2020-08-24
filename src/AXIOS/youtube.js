import axios from "axios";

const axiosInstance = axios.create({
  baseURL: '' + process.env.REACT_APP_YT_URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: process.env.REACT_APP_YT_KEY,
  }
})

export default axiosInstance;