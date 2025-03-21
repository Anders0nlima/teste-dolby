import React, { useState } from "react";
import "../index.css";
    
    // Importação dos vídeos
    import video1 from "../assets/video1.mp4";
    import video2 from "../assets/video2.mp4";
    import video3 from "../assets/video3.mp4";
    
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";


const TesteUm = () => {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const [isVideoFocused, setIsVideoFocused] = useState(false);
     const [currentVideo, setCurrentVideo] = useState(video1);

     const videos = [video1, video2, video3];
     
       const handleVideoClick = () => {
         setIsVideoFocused(true);
         setTimeout(() => {
           setIsVideoFocused(false);
         }, 3000); // Volta ao normal após 3 segundos
       };

    return(
        <div className="video-container">
              <video
                src={currentVideo}
                autoPlay
                muted
                loop
                onClick={handleVideoClick}
                className={isVideoFocused ? "focused" : ""}
              />
              <div className="dark-overlay"></div> {/* Camada escura com buracos */}
              <div className={`overlay ${isVideoFocused ? "hidden" : ""}`}>
                <div className="menu-icon" onClick={() => setIsSidebarOpen(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="brand-name">
                  MEKPO<span className="brand-symbol">OO</span>L
                </div>
                <div className="search-icon">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
              {isVideoFocused && <div className="video-title">Título do Vídeo</div>}
              <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="close-icon" onClick={() => setIsSidebarOpen(false)}>×</div>
                <div className="video-gallery">
                  {videos.map((video, index) => (
                    <video
                      key={index}
                      src={video}
                      muted
                      loop
                      onClick={() => {
                        setCurrentVideo(video);
                        setIsSidebarOpen(false);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
    )
}

export default TesteUm