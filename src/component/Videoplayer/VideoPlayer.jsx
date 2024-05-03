import React, { useRef } from "react";
import "./VideoPlayer.css";
import SISTecR from "../../assets/SISTecR.mp4";

const VideoPlayer = ({ play, setPlays }) => {
  const player = useRef(null);
  const videoref = useRef();
  const closeplay = (e) => {
    if (e.target === player.current) {
      videoref.current.pause();
      setPlays(false);
    }
  };

  return (
    <div
      className={`video-player ${play ? "" : "hide"}`}
      onClick={closeplay}
      ref={player}
    >
      <video src={SISTecR} autoPlay muted controls ref={videoref}></video>
    </div>
  );
};

export default VideoPlayer;
