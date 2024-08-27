import React, { Component } from 'react';
import './index.css'; // Ensure you have this CSS file

class VideoComponent extends Component {
  // Create a reference to the video element
  videoRef = React.createRef();

  componentDidMount() {
    // Ensure the video starts playing on load
    if (this.videoRef.current) {
      this.videoRef.current.play();
    }
  }

  render() {
    return (
      <div className="video-container">
        <video
          ref={this.videoRef}
          autoPlay
          loop
          muted
        >
          <source src="/services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoComponent;
