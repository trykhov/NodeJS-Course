const chalk = require('chalk');
const request = require('request');


const geocode = (address, callback) => {
    const convertAddress = encodeURIComponent(address); // converts addresses with special characters that input will allow
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${convertAddress}.json?access_token=pk.eyJ1IjoidHJ5Y2siLCJhIjoiY2sxMWVocGw4MDB1NDNjcGo5M2Jkb29jNCJ9.iVKFjwj6B7zY-NbdjR20SQ`;
    request({url, json: true}, (err, { body }) => {
        const { features } = body;
        if(err) {
            callback('Unable to connect to location services') // undefined is assigned by JS if developer doesn't explicitly put it
        } else if(features.length === 0) {
            callback('Unable to find location. Try another search', undefined); // the undefined is optional
        } else {
            callback(undefined, {
                longitude: features[0].center[0],
                latitude: features[0].center[1],
                location: features[0].place_name
            })
        }
    })
};



module.exports = geocode;