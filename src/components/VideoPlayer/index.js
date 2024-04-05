import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://youtu.be/YE7VzlLtp-4'
const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Manju Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url={videoURL} />
      <p className="paragraph">Manju V </p>
      <h1 className="heading">please give the Feedback about Manju</h1>
    </div>
  </div>
)

export default VideoPlayer
