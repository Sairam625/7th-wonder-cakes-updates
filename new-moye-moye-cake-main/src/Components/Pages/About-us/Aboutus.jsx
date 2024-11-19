import React from 'react';
import './About.css';
import About_img from '../../../assets/About-img/about-img.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src={About_img} alt="About image" className="about-image" />
      </div>
      <div className="about-text-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
        We at 7th wonder Cakes Shop specialize in Desserts & Cakes. 
we believe in "Quality in our Edge", from selecting the 
ingredients around India to the final exqusite creation 
that "Bring you smiles for Sure"Our cakes & Desserts
 receive a lot of compliments and are complimented
 by wide range of exclusive desserts.

Our theme based Creative Cakes, Cake pop
 Cup Cakes and Desserts for Parities, make you
 Party Unique and Inevitable. We spend more time in 
understanding customers expectations we Perfectly
 Personalize to the Needs
        </p>
        <p className="about-services">CAKES, BAKERY, | VEG-CAKES</p>
      </div>
    </div>
  );
};

export default About;