import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import video1 from '../assets/video1.mp4';
import animacao from '../assets/animacao.jpg';
import audio from '../assets/audio.jpg';
import filmes from '../assets/filmes.jpg';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);


function TesteDuis() {
  const [menuOpen, setMenuOpen] = useState(false);


  const logoRef = useRef(null);

  useEffect(() => {
  const logo = logoRef.current;
  if(!logo) return;

  const originalText = 'Mekpool';
  const letters = originalText.split('');

 const animateLogo = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1
  })

  for(let i = letters.length; i > 1; i--){
    timeline.to(logo, {
      text:{
        value: letters.slice(0, i).join('') + '|',
        delimiter: ''
      },
      duration: 0.2,
      ease:'power2.inOut'
    })
  }

  timeline.to(logo, {
    text:{value: 'M|', delimiter: ''},
    duration: 0.5
  })

  for(let i = 2; i <= letters.length; i++){
   timeline.to(logo, {
    text:{
      value: letters.slice(0, i).join('') + (i < letters.length ? '|' : ''),
      delimiter: ''
    },
    duration: 0.2,
    ease: 'power2.inOut'
   })
  }

  timeline.to(logo, {
    text: {value: originalText, delimiter: ''},
    duration: 0.2
  })
 }

 animateLogo();

 return () => {
  gsap.killTweensOf(logo);
 }
}, [])


  return (
    <div className="teste-dois-container">

      {/* Navbar */}
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <h1 className="logo" ref={logoRef}>Mekpool</h1>
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
