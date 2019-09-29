// example of https request without using libraries
// created for low level implementations but practically speaking, use libraries like request & axios
const https = require('https');

const url = "https://api.darksky.net/forecast/425c757e3161ac4af56d9aceb0d76089/40,-75";

const request = https.request(url, res => {
    let data = '';
    res.on('data', chunk => { // allows register of handler
        data = data + chunk.toString();
    }) 

    res.on('end', () => {
        const body = JSON.parse(data); // turns into an object
        console.log(body);
    })
});


request.on('error', () => {
    console.log("An error", error);
})
request.end();