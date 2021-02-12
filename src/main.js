import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$('#money').click(function() {
  const inputtedNumber = parseInt($('#usd').val());
  $('#usd').val("");
});

  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/8e9efc30f78ccf1b8a7da89c/latest/USD`
  });