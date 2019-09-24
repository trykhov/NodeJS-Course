// (Sept. 2019) NODE CURRENTLY DOES NOT ACCEPT ES6 SYNTAX 


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