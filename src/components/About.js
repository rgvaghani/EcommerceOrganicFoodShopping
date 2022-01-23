import React from 'react';
import Aboutimage from '../images/organic-about-1.png'

function About() {
  return (
  <div className='about'>
      <div className='about-img'>
          <img src={Aboutimage} alt='img'/>
      </div>
      <div className='about-text'>
          <h3>Fresh Food,Simply <font>Delicious</font> </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Saepe molestiae ab sapiente a facilis. Perferendis?</p>
            <a href='#' className='about-btn'>Read More</a>
      </div>
  </div>
  )
}

export default About;
