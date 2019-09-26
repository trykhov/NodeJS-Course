const request = require('request');

const url = "https://api.darksky.net/forecast/425c757e3161ac4af56d9aceb0d76089/37.8267,-122.4233";

request({ url: url }, (err, res) => {
    const data = JSON.parse(res.body);
    console.log(data);
    
})