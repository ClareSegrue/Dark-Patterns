import '../styles/TopBanner.css';
import React from 'react';
import termsOfPurchase from './termsOfPurchase.txt';

class TopBanner extends React.Component {

  render() {
    return (
      <div>
        <div id="row-layout">
          <button>login bonus</button>
          <button>store</button>
          <button>recharge</button>
        </div>
      </div>
    );
  }
}

export default TopBanner;