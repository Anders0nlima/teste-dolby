import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import video1 from '../assets/video1.mp4';
import animacao from '../assets/animacao.jpg';
import audio from '../assets/audio.jpg';
import filmes from '../assets/filmes.jpg';


function TesteDuis() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="teste-dois-container">
      
      {/* Navbar */}
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <h1 className="logo">Mekpool</h1>
        <button className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </nav>
      


        {/* Menu Overlay */}
        {menuOpen && (
        <div className="menu-overlay">
          <ul className="menu-list">
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/bibliotecas">Bibliotecas</Link></li>
            <li><Link to="/junte-se">Junte-se</Link></li>
            <li><Link to="/">Mekpool</Link></li>
          </ul>

          {/* Footer dentro do menu */}
          <footer className="menu-footer">
            <div className="footer-left">
              <span>Sobre</span>
              <span>Bibliotecas</span>
              <span>Junte-se</span>
              <span>Mekpool</span>
            </div>
            <div className="footer-right">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </footer>
        </div>
      )}



      {/* Vídeo de fundo */}
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
  );
}

export default TesteDuis;
