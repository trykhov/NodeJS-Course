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