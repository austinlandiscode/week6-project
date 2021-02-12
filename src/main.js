import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import ExchangeRate from './exchange.js';

let promise = ExchangeRate.convertCurrency();
promise.then(function(response) {

})

  $('#money').click(function() {
    let inputtedNumber = parseInt($('#usd').val());
    $('#usd').val("");
    let convert = $('#currency').val();
    console.log(inputtedNumber);
  });
  
  promise.then(function(response) {
    const body = JSON.parse(response);
    $('#answer').text(`the conversation of ${inputtedNumber}USD and ${convert}`)
  });