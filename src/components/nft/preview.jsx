import './preview.css';
import React from 'react';
import Equillibrium from '../nft/equilibrium.jpg';

function Preview() {
  return <div>
    <div className='darkblue'>
        <div className='card'>
            <img className='cardpic' src={Equillibrium}></img>
            <h1>equillibrium #3429</h1>
            <p>our equillibrium collection promotes balance and calm </p>
        </div>
  </div>
  </div>;
}

export default Preview;
