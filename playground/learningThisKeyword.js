let test = {
    title: 'a',
    showObject: function() { // will refer to object
        console.log(this); 
    },
    showProp: function() { // prints 'a' as the prop of the object it references
        console.log(this.title)
    }, 
    useArrow: () => { // will show an empty object
        console.log(this);
    }
}

function outsideObject() { // prints global function
    console.log(this);
}

arrowFunction = () => { // prints empty object
    console.log(this);
}

// this binds to whatever it is called in context
function bike() { // if I called this by itself, error because there's not 'name' property of the global object
    console.log(this.name);
}

var name = "ninja"
let obj1 = { name: "Tiger", bike: bike } // bike as the value refers to the bike() defined above
let obj2 = { name: "Wolf", bike: bike }

bike() // undefined
obj1.bike() // Tiger
obj2.bike() // Wolf

outsideObject.bind(obj1)() // returns obj1