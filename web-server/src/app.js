const path = require('path'); // provides methods that allow for easy manipulation of string paths
const express = require('express'); // express is a function

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public')); 


const app = express();

const combinePath = path.join(__dirname, '../public'); // path.join takes two paths and joins them together
// console.log(combinePath) // returns [root directory/..../web-server/public]


app.set('view engine', 'hbs'); // looks for index.hbs file in your public folder


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
        helpText: 'This is the help text'
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
    res.send({
        forecast: 'sunny',
        location: 'here'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})

