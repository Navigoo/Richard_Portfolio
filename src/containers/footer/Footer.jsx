import React from 'react';
import './footer.css';
import styled from 'styled-components';



const Footer = () => (
  <Container>
  <div className="rc79__footer section__padding">
    <div className="rc79__footer-heading">
      <h1 className="gradient__text">Do you think this is interesting dont hesitate to contact me!</h1>
    </div>


    <div className="rc79__footer-links">
      <div className="rc79__footer-links_logo">
       
        <p>Richard Carlsson, <br /> All Rights Reserved</p>
      </div>
      
      <div className="rc79__footer-links_div">
        <h4>RichardCarlsson.com</h4>
      
      </div>
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


@media screen and (max-width: 550px) {
 
    margin-top:120vh;
}

@media screen and (min-width: 550px) {
  margin-top:80vh;
 }

 @media screen and (min-width: 640px) {
  margin-top:50vh;
 }



 

`
