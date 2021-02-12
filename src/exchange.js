export default class ExchangeRate {
  static convertCurrency() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `GET https://v6.exchangerate-api.com/v6/8e9efc30f78ccf1b8a7da89c/pair/USD/${convert}/${inputtedNumber}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}