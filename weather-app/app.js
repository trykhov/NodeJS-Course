const chalk = require('chalk');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
const yargs = require('yargs');


yargs.command({
    command: 'enterCityName',
    builder: {
        city: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        geocode(argv.city, (err, data) => {
            const {longitude, latitude, location} = data;
            if(err) {
                return console.log(err);
            } 
            forecast(longitude, latitude, (err, forecastData) => {
                if(err) {
                    return console.log(err);
                }
                console.log(chalk.magenta(location));
                console.log(chalk.green(forecastData));
            });
        })
    }
});

yargs.parse();

// enter into terminal: node app.js <command> --<builder.[variable name]>=<input>