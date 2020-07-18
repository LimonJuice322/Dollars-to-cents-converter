'use strict'

let btn_convert = document.querySelector('.app__btn-convert');
btn_convert.addEventListener('click', convert);

function convert() {
  // Declare obj for input value and further output value
  let io = {
    input: document.querySelector('.app__input').value,
    output: ''
  }
  // Get main element
  let app = document.querySelector('.app');
  // Delete previous result
  if (document.querySelector('.app-table')) document.querySelector('.app-table').remove();
  if (document.querySelector('.app__output')) document.querySelector('.app__output').remove();

  // Coin counting function. Splite cents into different coins
  function split_by_coins(number) {
    let penny, nickel, dime, quarter, balance;
    quarter = Math.floor(number / 25);
    balance = number % 25;
    dime = Math.floor(balance / 10);
    balance = balance % 10;
    nickel = Math.floor(balance / 5);
    balance = balance % 5;
    penny = Math.floor(balance / 1);
    return `<table class="app-table">
              <tr class="app-table__row">
                <td class="app-table__cell">Coins</td>
                <td class="app-table__cell">Count</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">Quarters (25 &#162)</td>
                <td class="app-table__cell">${quarter}</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">Dimes (10 &#162)</td>
                <td class="app-table__cell">${dime}</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">Nickels (5 &#162)</td>
                <td class="app-table__cell">${nickel}</td>
              </tr>
              <tr class="app-table__row">
                <td class="app-table__cell">Pennies (1 &#162)</td>
                <td class="app-table__cell">${penny}</td>
              </tr>
            </table>`;
  }

  // Check input value. If input value not number or negative number
  if (!(Number.isFinite(+io.input)) || io.input.indexOf('-') != -1) io.output = `<p class="app__output">This is incorrect value</p>`;
  else {
    // Declare variable for cents
    let cents;
    // If input value not integer, but the balance is over 99 cents
    if (io.input.indexOf('.') != -1 && io.input.indexOf('.') < io.input.length-3) {
      io.output = `<p class="app__output">This is incorrect value</p>`;
    } else {
      // Convert dollars to cents. Math.round() used for rounding numbers 0.55 - 0.58
      cents = Math.round(+io.input * 100);
      io.output = `<p class="app__output">Total cents: ${cents}</p>` + split_by_coins(cents);
    }
  }

  // Render output
  app.insertAdjacentHTML('beforeend', io.output);
}
