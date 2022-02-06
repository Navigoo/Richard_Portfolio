import React from 'react';
import './cta.css';
import { saveAs } from "file-saver";


const saveFile = () => {
   
  saveAs(
    "https://navigoo.se/wp-content/uploads/2022/02/richard-carlsson-CV-navigoos-cv.pdf"
  );
};


const CTA = () => (

  
  


  <div className="rc79__cta">
    <div className="rc79__cta-content">
      <p>Interested to find out more?</p>
      <h3>Feel free to download my CV</h3>
    </div>
    <div className="rc79__cta-btn">
      <button onClick={saveFile} type="button">Download</button>
    </div>
  </div>
);

export default CTA;
