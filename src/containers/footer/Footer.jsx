import React from 'react';
import './footer.css';
import styled from 'styled-components';



const Footer = () => (
  <Container>
  <div className="rc79__footer section__padding">
    <div className="rc79__footer-heading">
      <h1 className="gradient__text">Thanks for visiting have a nice day!</h1>
    </div>


    <div className="rc79__footer-links">
  
      

      <div className="rc79__footer-links_div">
        <h4>Get in touch</h4>
        <p>0704237691</p>
        <p>richard@navigoo.se</p>
      </div>
    </div>

    <div className="rc79__footer-copyright">
      <p>@2021 Richard Carlsson. All rights reserved.</p>
    </div>
  </div>
  </Container>
);

export default Footer;

const Container = styled.div`
display:flex;
height:100%;





 

`
