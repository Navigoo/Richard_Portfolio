import React from 'react';
import './footer.css';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';



const Footer = () => (
  <Container>
  <div className="rc79__footer section__padding">
    <div className="rc79__footer-heading">
      <h1 className="gradient__text">Thanks for visiting have a nice day!</h1>
    </div>


    <div className="rc79__footer-links">

      <div>
      
        <Wrap>
          
      <GitHubIcon sx={{ fontSize: 40 , color: 'white'}} href="/google.se"/>   
      </Wrap>     
     
      <a href="https://github.com/Navigoo">Check out my GitHub here</a>
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
display-content:center;

text-align:center;
p , a{
  font-size: 18px;
  font-family: var(--font-family);
  line-height: 21px;
  color: #fff;
  word-spacing: 2px;
}


`

const Wrap = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
