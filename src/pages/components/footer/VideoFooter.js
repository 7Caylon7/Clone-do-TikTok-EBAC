import React from "react";
import "./VideoFooter.css";
import { MusicNote } from "@mui/icons-material";

function VideoFooter({ name, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter_music">
          <MusicNote />
          <div className="videoFooterMusic_text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter_records"
        alt="Imagem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"
      />
    </div>
  );
}

export default VideoFooter;
