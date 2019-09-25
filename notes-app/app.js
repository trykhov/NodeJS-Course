// (Sept. 2019) NODE CURRENTLY DOES NOT ACCEPT ES6 SYNTAX 

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');



// yargs.version('1.1.0');
// insert into terminal inputs

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    body: {
        describe: 'add body description',
        demandOption: true,
        type: 'string'
    },
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true, // requires that the user puts a title (false by default)
          type: 'string' // requires that the title must always be a string
      }  
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler(argv) {
        notes.listNotes(argv.title);
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'Read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

// calling yargs.argv triggers the commands
// console.log(yargs.argv); // returns object with variables as keys and value as values
yargs.parse() // functions as yargs.argv