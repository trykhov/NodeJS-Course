const fs = require('fs'); // loading module

// creates a new file
// first argument is file name, second is content
// if file exists, content will be overwritten
fs.writeFileSync('notes.txt', 'Changing the text');

// it appears right after the content in the writeFileSync
fs.appendFileSync('notes.txt', ' This will appear next the writeFileSync message');

// runs the file from the path to the utils.js file (no need for the .js extension)
// the variable doesn't have to be "name" (or the same name as the variable that's being exported)
const test = require('./utils');

// must use dot notation when exporting multiple variables and functions
console.log(test.name);
console.log(test.add(4,5));


const notes = require('./notes');
console.log(notes()); // when printing a function, include the arguments


// validator library valids format of a string
const validator = require('validator'); // store all contents of validator package into the variable


console.log('try@yahoo.com:', validator.isEmail('try@yahoo.com')); // returns true
console.log('this is a correct email format@gmail.com:', validator.isEmail('this is a correct email format@gmail.com')); // false (due to spaces)

console.log("https://www.yahoo.com:", validator.isURL("https://www.yahoo.com")); // returns true
console.log("https/www.yahoo.com:", validator.isURL("https/www.yahoo.com")); // returns false
  
console.log("www.yugioh.com:", validator.isURL("www.yugioh.com")); // returns true
console.log("amazon.com:", validator.isURL("amazon.com")); // returns true



const chalk = require('chalk');
// prints "Success!" in green in the terminal
console.log(chalk.green("Success!"));
console.log(chalk.bold.red("Error!")); // makes "Error bold and red"
console.log(chalk.inverse.red("Error!")); // inverse makes the background color of choice

// argv = argument vector
console.log(process.argv); // returns an array [path to nodeJS, path to app.js, argument sent in terminal]
console.log(process.argv[2]); // returns input argument


const command = process.argv[2];

if(command === 'add') {
    console.log("Adding new node!");
}