import React from 'react';
import { Footer, Education, References, Possibility, Features, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';





const App = () => (   
  <div className="App">
     <div className="gradient__bg"> 
      <Navbar />
      <Header />
    </div>
  
    <Brand />
    <Possibility />
    <Features />
    <CTA />
    <References/>
    <Education/>
    <Footer />
    
  </div>


);

export default App;
