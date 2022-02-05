import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const References = () => (
  
  <div>
  <ReferenceHeader> 
<h1 className="gradient__text">What They Say About Me</h1>
</ReferenceHeader>

<Container id="references">

 <Row>
    <Col sm={4}>
    <Wrap>
      <Wrap2>
      <FormatQuoteIcon color="primary" />
      <p>"I have the honour of working with Richard under the Umbrella of Asus for few years now. Richard is not just a Sr Account Manager but an owner of complete process from start to end. He is not only keen of pushing the volumes out but also keep an eye on profits and constantly look at ways of optimising profits.

He is a joy to work with, and also fight for "the best business interest". He always keeps an eye on a bigger picture which demonstrate his key entrepreneurial skill. He manages a very big portion of business at Asus and is able to turn numbers Year on Year. I cannot recall a day when Richard was not able to turn up for the day, he always give his 100%. He is very honest in his approach and his large than life personality not only brings his team together but also the whole organisation.

I certainly think he is a power house behind Asus's recent success. He contributes at so many different levels in so many different ways. I believe he will add enormous value to wherever he choose to place himself."<br/><br/><br/>Tahir Nasim<br/>Director Business Control & Supply Chain</p>

</Wrap2>

    </Wrap>
    <Wrap>
      <Wrap2>
      <FormatQuoteIcon color="primary" />
      <p>"Det har varit roligt och lättsamt att jobba med Richard. Behöver du en hemsida kan jag varmt rekommendera honom. Lyhörd och professionell!"<br/><br/><br/>Daniel Möller<br/>Osteopat, Sjukgymnast Och Yoga Instruktör</p>

</Wrap2>
    </Wrap>
   
    </Col>
  </Row>
  <Row>
    <Col sm={4}><Wrap>
      <Wrap2>
      <FormatQuoteIcon color="primary" />
      <p>"I have had the pleasure to work with Richard for almost 4 years at Asus Nordic AB. Richard is the go to guy when you want things to be done. He always delivers exceptional sales results and achieve company targets. Simply put, he is rock! As a person Richard is always happy and very funny! The kind of guy you really enjoy doing business with as a client and a big joy to have as a colleague! "<br/><br/><br/>Han-Hsuan Lin<br/>Head Of MDM Gaming APAC Region</p>

</Wrap2>
    </Wrap>
    <Wrap>
      <Wrap2>
      <FormatQuoteIcon color="primary" />
      <p>"Richard har varit lyhörd och nogrann genom hela processen, vi har blivit involverade som ett Team för att lyckas nå våra mål och vi är oerhört nöjda med resultatet!"<br/><br/><br/>Friskhuset Linköping<br/></p>

</Wrap2>
    </Wrap></Col>
  </Row>
</Container>

</div>
);

export default References;

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
  margin-top:10vh;
  margin-bottom:10vh;

`
const Wrap = styled.div`
display:flex;
justify-content:center;
width:600px;
align-items:center;
margin-right:5vw;
margin-bottom:2vh;

@media screen and (min-width: 320px) {
  width:350px;
}

@media screen and (min-width: 400px) {
  width:350px;
}
p{
  color:white;
}
`
const Wrap2 = styled.div`
width:600px;

`

