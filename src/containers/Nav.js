import React from 'react';
import { Link } from 'react-router-dom';
import style from '../assets/styles/nav.module.css';
import navImage from '../assets/images/pokedex.png';

function Navbar() {
  return (
    <>
      <header className={style.headerNav}>
        <img src={navImage} className={style.pekedexLogo} alt="Logo" />
        <ul className={style.mainNav}>
          <Link to="/" className={style.linkStyle}>
            Home
            {' '}
          </Link>
          <Link to="/about" className={style.linkStyle}>
            About
            {' '}
          </Link>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
