import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";


function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  function handleStart() {
    /*função que dá play ao clicar no vídeo*/

    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handleStart}
        loop /*parametro pra fazer o vídeo se manter em loop*/
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      ></video>
      {/* Side bar*/}
      <VideoFooter />
    </div>
  );
}

export default Video;
