import React from 'react';
import { Link } from 'react-router-dom'; 
import video1 from '../assets/video1.mp4'; // Importando o vídeo
import animacao from '../assets/animacao.jpg'; // Importando a imagem
import audio from '../assets/audio.jpg'; // Importando a imagem
import filmes from '../assets/filmes.jpg'; // Importando a imagem
import NavBar from '../comp/NavBar';

function TesteDois(){
    return(
       <div className="teste-dois-container">
        <div className="video-background">
        <video autoPlay loop muted className="video">
          <source src={video1} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className="links-container">
          <Link to="/teste-um" className="video-link">
            <img src={animacao} alt="Teste Um" />
          </Link>
          <Link to="/teste-dois" className="video-link">
            <img src={audio} alt="Teste Dois" />
          </Link>
          <Link to="/teste-tres" className="video-link">
            <img src={filmes} alt="Teste Três" />
          </Link>
        </div>
      </div>
       </div>
    )
}

export default TesteDois