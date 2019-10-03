const express = require('express'); // express is a function
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
const hbs = require('hbs'); // in order to work hbs with nodemon, enter in terminal "nodemon src/app.js -e js,hbs"
const path = require('path'); // provides methods that allow for easy manipulation of string paths
// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public')); 


const app = express();

// Define paths for Express config
const combinePath = path.join(__dirname, '../public'); // path.join takes two paths and joins them together
// console.log(combinePath) // returns [root directory/..../web-server/public]
// express expects a folder titled "views" in your src path by default
// we are changing that with the code below to allow a folder titled "templates" to be read by express
const viewsPath = path.join(__dirname, '../templates/views'); 
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs'); // looks for index.hbs file in your public folder
app.set('views', viewsPath); // now it expects to find the folder named "templates"
hbs.registerPartials(partialsPath);

// static takes path of server
// you now have access to all the files in the public folder
// ex. can enter: localhost:3000/help.html to show html page
app.use(express.static(path.join(__dirname, '../public'))) 


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App', // allows you to inject value into template
        name: 'Try'
    }) //renders the index file
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Try'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is the help text',
        title: 'Help',
        name: 'Try'
    });
})

// all domains of this runs on express server
// app.get('', (req, res) => {
//     res.send(path.join(__dirname, '../public/index.html'));
// });

// app.get('/help', (req, res) => {
//     // res.send([{ // can send object
//     //     name: 'Try',
//     //     age: 24
//     // }, {name: 'Cal'}]);
//     // res.send('/help.html');
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>');
// });

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: "You must send an address"
        })
    } 
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error) return res.send({ error });
        forecast(longitude, latitude, (error, forecastData) => {
            if(error) return res.send({ error });
            res.send({
                address: req.query.address,
                forecast: forecastData,
                location
            })
        })
    })
});

 

app.get('/products', (req, res) => {
    // can enter url: localhost:3000/products?(can enter variables after ?)
    // the thing after the ? is called a query with the property of req
    // console.log(req.query) // ex. localhost:3000/products?search=games&games=5 ==> {search: 'games', games: 5}

    if(!req.query.search) { // when req.query.search is null
        return res.send({ // return to stop the execute and prevent the second res.send from being called
            error: "You must provide a search term"
        })
    }

    res.send({ // can't send headers after they are sent to the client
        products: []
    })
});

// if user can't find anything in the help page
app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found',
        name: 'Try',
        title: '404'
    })
})

// the wildcard * tells the routes to match with anything that hasn't been assigned before (above routes)
// needs to be last because of how express looks for routes (first public folder then routes in other get methods)
app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'My 404 page',
        name: 'Try',
        title: '404'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})

