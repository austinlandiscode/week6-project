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
    const url = 
  }