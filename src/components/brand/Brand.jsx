import React from 'react';
import { react, javascript, wordpress, mysql, shopify, npm } from './imports';
import './brand.css';

const Brand = () => (
  <div className="rc79__brand section__padding">
    <div>
      <img src={react} alt="reactlogo" />
    </div>
    <div>
      <img src={javascript} alt="jslogo"/>
    </div>
    <div>
      <img src={wordpress} alt="wordpresslogo"/>
    </div>
    <div>
      <img src={mysql} alt="mysqllogo"/>
    </div>
    <div>
      <img src={shopify} alt="shopifylogo"/>
    </div>
    <div>
      <img src={npm} alt="npmlogo"/>
    </div>
  </div>
);

export default Brand;
