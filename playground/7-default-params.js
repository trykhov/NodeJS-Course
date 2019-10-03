const greeter = (name = 'Try', age) => {
    console.log(`Hello ${name}`);
}

greeter('Mike') // should return Hello Mike
greeter() // should return Hello Try, will give undefined if something calls 'age'