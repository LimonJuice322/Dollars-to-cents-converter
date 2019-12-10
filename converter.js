'use strict'

function convert() {
  // Declare variables for input value and message
  let message, num = document.getElementById('number').value;
  // Delete previous result
  if (document.querySelector('table')) document.querySelector('table').remove();
  if (document.querySelector('.total')) document.querySelector('.total').remove();

  // Coin counting function
  function divide_by_coins(number) {
    let penny, nickel, dime, quarter, balance;
    quarter = Math.floor(number / 25);
    balance = number % 25;
    dime = Math.floor(balance / 10);
    balance = balance % 10;
    nickel = Math.floor(balance / 5);
    balance = balance % 5;
    penny = Math.floor(balance / 1);
    return `<table>
              <tr>
                <td>Coins</td>
                <td>Count</td>
              </tr>
              <tr>
                <td>Quarters (25 &#162)</td><td>${quarter}</td>
              </tr>
              <tr>
                <td>Dimes (10 &#162)</td><td>${dime}</td>
              </tr>
              <tr>
                <td>Nickels (5 &#162)</td><td>${nickel}</td>
              </tr>
              <tr>
                <td>Pennies (1 &#162)</td><td>${penny}</td>
              </tr>
            </table>`;
  }

  // Check input value
  if (!(Number.isFinite(+num))) message = `<div class="total">This is incorrect value</div>`;
  else {
    let cents;
    if (num.indexOf('.') != -1 && num.indexOf('.') < num.length-3) {
      message = `<div class="total">This is incorrect value</div>`;
    } else {
      cents = +num * 100;
      message = `<div class="total">Total cents: ${cents}</div>` + divide_by_coins(cents);
    }

  }
  // Create block for function's message
  document.querySelector('.window').insertAdjacentHTML('beforeend', message);
}
