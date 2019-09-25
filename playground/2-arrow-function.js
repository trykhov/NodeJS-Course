// already familiar with arrow functions

// this is understanding the concept of bindings
// ex.
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mile'],
    printGuestList() {
        console.log(`Guest list for ${this.name}`); // this was able to work because it doesn't use the standard function format
        this.guestList.forEach(function(guest) { // standard functions have their own "this" bindings
            console.log(`${guest} is attending ${this.name}`);
        });
        this.guestList.forEach(guest => { // arrow function removes "this" issue
            console.log(`${guest} is attending ${this.name}`); 
        })
    }
}

event.printGuestList();