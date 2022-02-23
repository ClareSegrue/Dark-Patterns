import '../styles/PaymentAndShipping.css';
import React from 'react';
import termsOfPurchase from './termsOfPurchase.txt';

class Shipping extends React.Component {

  render() {
    return (
      <div>
        <form id="shipping-form">
          <div className='form-flex'>
            <input type="text" id="address-input"></input>
            <label for="address-input">Address:</label>
          </div>
          <div className='form-flex'>
            <input type="text" id="city-input" value="Shaker Heights"></input>
            <label for="city-input">City:</label>
          </div>
          <div className='form-flex'>
            <input type="text" id="country-input" value="2022-06"></input>
            <label for="country-input">Country:</label>
          </div>
          <div className='form-flex'>
            <input type="text" id="state-input"></input>
            <label for="state-input">State:</label>
          </div>
          <div className='form-flex'>
            <input type="text" id="zip-input"></input>
            <label for="zip-input">Zip</label>
          </div>
        </form>
      </div>

    );
  }
}

export default Shipping;