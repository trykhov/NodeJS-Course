// Object property shorthand

const name = "Andrew";
// const userAge = 27;
const age = 27;

const user = {
    // name: name, // same name as variable so just remove colon and variable name
    name,
    // age: userAge,
    age,
    location: "Chicago"
};

// console.log(user)


// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// easier way of writing: product.label & product.price
const { label, price } = product;
// console.log(label, price);

// can be destructed in the function definition
const transcation = (type, { label, stock }) => {
    console.log(label, stock)
}

transcation('order', product) // product is an object
