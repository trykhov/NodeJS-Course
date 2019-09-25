const chalk = require('chalk');
const fs = require('fs');

const getNotes = () =>  "Your notes....";

const addNote = (title, body) => {
    const notes = loadNotes(); // loaded the notes 
    const duplicateNotes = notes.filter(note => note.title === title); // check if a title has already been taken
    if(!duplicateNotes.length) {
        notes.push({  // pushing the notes into the array
            title: title,
            body: body
        });
        saveNotes(notes); // (check comments in function)
    } else {
        console.log("log is taken");   
    }
};

const removeNote = title => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(note => note.title !== title); // get only titles that don't match the title input
    // find is different from filter, find() stops when it finds the first element with the satisfied condition
    // filter() goes through entire array
    const duplicateNote = notes.find(note => note.title === title); 
    if(!duplicateNote.length) { // if there's not a value, add note
        saveNotes(duplicateNotes); // take the list and override the file
    } else {
        console.log("There is no object with that title");
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.green(note.title));
    })
};

const readNote = title => {
    const notes = loadNotes();
    const foundNote = notes.find(note => note.title === title);
    if(foundNote) {
        console.log(foundNote);
    } else {
        console.log(chalk.red("No note found"));
    }
};

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes); // convert the object into a string
    fs.writeFileSync('notes.json', dataJSON); // put the object into the notes.json file
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json'); // gets bit content from JSON file
        const dataJSON = dataBuffer.toString();  // turn it into a readable string
        return JSON.parse(dataJSON); // convert into a JSON object
    } catch (err) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    listNotes: listNotes,
    readNote: readNote,
    removeNote: removeNote
};