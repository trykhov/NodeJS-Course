const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/425c757e3161ac4af56d9aceb0d76089/${latitude},${longitude}`;
    request({url, json: true}, (err, { body } = {}) => {
        const { daily, currently, error } = body; 
        console.log(body.error)
        if(err) {
            callback("Unable to connect to weather services");
        } else if(error) {
            callback("Please enter a valid input");
        } else {
            callback(undefined,
                `${daily.data[0].summary} It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability}% chance of rain.`
            );
        }
    })
};

module.exports = forecast;