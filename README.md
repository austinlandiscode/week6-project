# LandExchange

#### Web application that takes a value in USD and returns a value in one of five different currencies.

#### By: Austin Landis

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap
* NPM Webpack
* Babel
* eslint


## Description
This is my week six project for Epicodus, it was intended to track my progress on API's, Promises, and other Async related methods/functions. It will take in a value in USD, and a different currency to convert that value into. It will then make an API call with that information, and parse through the returned object to display the relevant information.

## Setup/Installation Requirements
* Click on the green download code button. Click on the clipboard icon.
* Open your terminal, navigate to the preffered storage location on your desktop.
* Type git clone and then paste the cloned project.
* CD into the cloned project.
* type code . to open the project in your code editor.
OR
* Drag cloned project into code editor if your command pallette does not support code .

## Npm Initilization
* Verify package.json has correct npm packages for needs
* Modify title on line 18 of webpack.config.js
* Modify title on line 2 of package.json
* Modify description on line 19 of package.json
* Modify title on line 2 if package-lock.json
* Run ```npm init -y```
* Run ```npm install```
* Verify install works by running ```npm run test``` and ```npm run build```
* To open your project in a browser, perform ```npm run start``` in your terminal

## API_KEY Acquisition and Management
* Go to https://www.exchangerate-api.com/
* Enter your email address and click 'Get Free Key!'
* You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click 'Get Started!'
* At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
* Navigate to your projects root directory and create a .env file.
* You will need to store your API Key in a .env file like in a variable like so API_KEY ='api-key'
* Add your .env file to your .gitignore so that your API Key does not become public knowledge when you push to your projects repository.


## Known Bugs

* Application was not designed for edge cases.
* Will update later.

## License

Copyright 2021 Austin Landis
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Contact Information
austinlandiscode@gmail.com
