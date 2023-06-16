import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@Caylon S.</h3>
        <p>Descrição do vídeo</p>
        <div className="videoFooter_music">
          
          <p>Título da música</p>
        </div>
      </div>
      <img className="videoFooter_records" 
      alt="Imagem de um vinil girando"
      src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"

      />
    </div>
  );
}

export default VideoFooter;
