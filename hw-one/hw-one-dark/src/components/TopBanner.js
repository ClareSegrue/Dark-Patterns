import '../styles/TopBanner.css';
import React from 'react';
import termsOfPurchase from './termsOfPurchase.txt';

class TopBanner extends React.Component {

  render() {
    return (
      <div className="parent">
        <div id="row-layout-left">
          <button className='login'>login bonus</button>
          <button className='store'>store</button>
          <button className='recharge'>recharge</button>
        </div>
        <div id="row-layout-right">
          <button className="x">X</button>
        </div>
      </div>


    );
  }
}

export default TopBanner;