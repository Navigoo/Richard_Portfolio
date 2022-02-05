import React from 'react';
import people from '../../assets/people.png';
import Phone from '../../assets/phone.png';
import './header.css';
import { Emailform  } from './Emailform';

const Header = () => (
  <div className="rc79__header section__padding" id="home">
    <div className="rc79__header-content">
      <h1 className="gradient__text">Hi! I Am Richard.
      <br/>Let&apos;s Build Something Amazing Together!</h1>
      <p>19 Years Of Sales, Marketing & Management<br />4 Years Of Webdevelopment</p>

        <Emailform />
       
    
      
      <div className="rc79__header-content__people">
        <img src={people} alt="imagesonpeople"/>
        <a href="https://www.linkedin.com/in/richard-carlsson-54b95645?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3BjlsE6%2BhXTs6BwOUXGQwQBA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile"><p>Join me on LinkedIn you as well!</p></a>
      </div>
    </div>

    <div className="rc79__header-image">
      <img src={Phone}  alt="phoneimage"/>
    </div>
  </div>
);

export default Header;
