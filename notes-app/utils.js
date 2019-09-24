console.log("Hello from the utils.js file!");


const name = "Try";

const add = function(a, b) {
    return a + b;
}

// in order to use the name variable, you have to export it
// module.exports = name;
// module.exports = add; // exporting a function


// this is how to export multiple variables and functions
module.exports = {
    name: name,
    add: add
}