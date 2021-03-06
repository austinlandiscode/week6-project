import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import ExchangeRate from './exchange.js';

$(document).ready(function() {
  $('#money').submit(function() {
    event.preventDefault();
    let convertedCurrency = $('#currency1').val();
    let inputtedNumber = parseInt($('#usd').val());
    let convertedCurrencyTwo = $('#currency2').val();
    $('#usd').val("");
    let promise = ExchangeRate.convertCurrency(convertedCurrency, convertedCurrencyTwo, inputtedNumber);
    promise.then(function(response) {
      const body = JSON.parse(response);
      if (body.result === 'success') {
        $('#answer').text(`${inputtedNumber} ${convertedCurrency} is equal to ${body.conversion_result} ${convertedCurrencyTwo}`);
        $('#conversions').append(`<tr><td>${convertedCurrency}</td><td>${inputtedNumber}</td><td>${convertedCurrencyTwo}</td><td>${body.conversion_rate}</td><td>${body.conversion_result}</td><td>${body.time_last_update_utc}</td></tr>`);
      } else if (body.result === 'error') {
        $('#showErrors').text(`There was an error processing your request ${body["error-type"]}`);
      }
      },function() {
      $('#showErrors').text(`There was an error contacting the API, please try again later!`);
    });
  });
});