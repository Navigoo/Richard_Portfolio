import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rc79__navbar">
      <div className="rc79__navbar-links">
        <div className="rc79__navbar-links_logo">
          <h1 className="richard-logo">RC</h1>
        </div>
        <div className="rc79__navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#possibility">WHO AM I</a></p>
          <p><a href="#features">EXPERIENCE</a></p>
          <p><a href="#references">REFERENCES</a></p>
          <p><a href="#education">EDUCATION</a></p>

        </div>
      </div>
      <div className="rc79__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="rc79__navbar-menu_container scale-up-center">
          <div className="rc79__navbar-menu_container-links">
          <p><a href="#home">HOME</a></p>
          <p><a href="#possibility">WHO AM I</a></p>
          <p><a href="#features">EXPERIENCE</a></p>
          <p><a href="#references">REFERENCES</a></p>
          <p><a href="#education">EDUCATION</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
