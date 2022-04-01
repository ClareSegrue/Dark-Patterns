import '../styles/PaymentAndShipping.css';
import React from 'react';
import termsOfPurchase from './termsOfPurchase.txt';

class Payment extends React.Component {

  render() {
    return (
        <div>
        <form id="payment-form">
          <div className='form-flex'>
            <input type="text" id="full-name-input"></input>
            <label for="full-name-input">Name:</label>
          </div>
          <div className='form-flex'>
            <input type="text" id="card-number-input" value="0123-4567-8900-1234"></input>
            <label for="card-number-input">Credit Card Number:</label>
          </div>
          <div className='form-flex'>
            <input type="month" id="expiration-input" value="2022-06"></input>
            <label for="expiration-input">Expiration Date:</label>
          </div>
          <div className='form-flex'>
            <input type="number" id="cvv-input" maxLength="3"></input>
            <label for="cvv-input">CVV:</label>
          </div>
          <button type="submit" class="accept-button" id="default-button">
              save payment for future
          </button>
        </form>
      </div>

    );
  }
}

export default Payment;