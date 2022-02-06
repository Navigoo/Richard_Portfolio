import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Business Development',
    text: 'From day 1 i have been working with some kind of sales related tasks in many different levels and mostly in the IT Industry',
  },
  {
    title: 'Mindset',
    text: 'No matter what i am taking on my shoulders i have an positive mindset and a strong will to solve things',
  },
  {
    title: 'Passion',
    text: 'Almost every one can achieve a lot, if you also have a passion on what you are doing there is almost no limits',
  },
  {
    title: 'From senior business management to a "junior" developer ',
    text: 'As the passion and interest led me into webdevelopment i have now studied hard  in almost 2 years and experienced over 3 years in own projects with many happy customers in webdevelopment',
  },
];

const Features = () => (
  <div className="rc79__features section__padding" id="features">
    <div className="rc79__features-heading">
      <h1 className="gradient__text">Experiences</h1>
      <p>More than 19 Years experience on sales,
business management, marketing, customer relationship management,
planning and execution of a marketing and product strategy, cost analysis,
market analysis, P&L management, Forecast planning.<br/>
I have also have a long experience of staff responsibility, hiring and leadership.<br/>
<br/>
Now i have changed my career in part of my new dreams and goals to become a webdeveloper and almost<br/>
finished 2,5 years of studies in total and more years in projects for myself and to businesspartners.

Beside this i also have my own business Navigoo.se where i work with my passion, webbdesign and web development as well as ecommerce.<br/>
I am now looking forward to new challanges in my new role!</p>

    </div>
    <div className="rc79__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);


export default Features;
