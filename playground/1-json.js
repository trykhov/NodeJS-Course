const fs = require('fs');

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// takes in object, array, etc. and turns it into a json string
const bookJSON = JSON.stringify(book); // bookJSON is a string, not an object
console.log(book) // returns the object (keys are not strings)
console.log(bookJSON); // returns a string
console.log(bookJSON.author); // returns undefined

// ****************************************************************************************

const parseData = JSON.parse(bookJSON); // converts the string into a JSON object
console.log(parseData.author); // returns Ryan Holiday

// ****************************************************************************************

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('./1-json.json');
// console.log(dataBuffer); // returns bits
// console.log(dataBuffer.toString()); // returns the string from the JSON file
// const data = JSON.parse(dataBuffer.toString());
// console.log(data.title);

// ****************************************************************************************

const dataObj = fs.readFileSync('1-json.json');
const newObj = JSON.parse(dataObj.toString()); // need to string it first, otherwise they are just bits
newObj.name = "Try"; // changing the features of the object
newObj.age = 24;
fs.writeFileSync('1-json.json', JSON.stringify(newObj)); // overwritten the file with the new object as the content
