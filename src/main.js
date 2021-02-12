import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import ExchangeRate from './exchange.js';

$(document).ready(function() {
  $('#money').submit(function() {
    let convertedCurrency = $('#currency').val();
    let inputtedNumber = parseInt($('#usd').val());
    $('#usd').val("");
    let promise = ExchangeRate.convertCurrency(convertedCurrency, inputtedNumber);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#answer').text(`the conversation of ${inputtedNumber}USD and ${convertedCurrency} is ${body.conversion_result}`);
      $('#conversions').append(`<tr><td>USD</td><td>${inputtedNumber}</td><td>${convertedCurrency}</td><td>${body.conversion_result}</td><td>${body.time_last_update_utc}</td></tr>`)
    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});