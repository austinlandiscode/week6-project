export default class ExchangeRate {
  static convertCurrency(convertedCurrency, convertedCurrencyTwo, inputtedNumber) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_Key}/pair/${convertedCurrency}/${convertedCurrencyTwo}/${inputtedNumber}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}