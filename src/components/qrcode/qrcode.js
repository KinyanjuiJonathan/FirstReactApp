import React from 'react';
import Code from '../images/code.png';
import './qrcode.css';

export default function Qrcode() {

  return <div>
      <div className='topcont'>
          <div className='container'>
              <img className='qqcode' src={Code}></img>
              <h1>improve your front-end skill by building projects</h1>
              <p>scan the Qr code to visit frontend mentor and and take your coding skills to the next level </p>
          </div>
          
          

      </div>
  </div>;
}
