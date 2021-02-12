import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import ExchangeRate from './exchange.js';

$(document).ready(function() {
  $('#money').click(function() {
    let inputtedNumber = parseInt($('#usd').val());
    $('#usd').val("");
    let convert = $('#currency').val();
    let promise = ExchangeRate.convertCurrency();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#answer').text(`the conversation of ${inputtedNumber}USD and ${convert} is ${body.conversion_result}`)
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});