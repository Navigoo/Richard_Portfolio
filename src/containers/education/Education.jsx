import React from 'react';
import styled from 'styled-components';
import Tabpanel from '../education/languages';

const Education = () => (

    <div>
    <ReferenceHeader> 
  <h1 className="gradient__text">Knowledge</h1>
  </ReferenceHeader>
  
  <Container id="education">
      <TabWrap>
  <Tabpanel/>
  </TabWrap>
  </Container>
  
  </div>
);

export default Education;
const Container = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
height:auto;
font-family: var(--font-family);
align-items:center;
margin-top:2vh;
margin-bottom:5vh;
margin-right:2vw;
margin-left:2vw;
@media screen and (max-width: 550px) {
  margin-bottom:20vh;

}

@media screen and (max-width: 630px) {
  margin-bottom:20vh;

}

@media screen and (max-width: 900px) {
  margin-bottom:40vh;
}
`
const ReferenceHeader = styled.div`
display:flex;
justify-content:center;
font-family: var(--font-family);
font-weight: 800;
margin-top:5vh;
margin-bottom:10vh;
`

const TabWrap = styled.div`
display:flex;
justify-content:center;
width:90%;
height:auto;
color:white;
`