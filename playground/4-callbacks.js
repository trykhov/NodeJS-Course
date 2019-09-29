setTimeout(() => {
    console.log("Two seconds are up");
}, 2000)


const names = ["Bob", "Sarah", "Phil"];
const shortNames = names.filter(name => name.length <= 4);


const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data);
    }, 2000);
};

geoCode('Chicago', data => {
    console.log(data);
});

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum

const add = (num1, num2, callback) => {
    setTimeout(() => {
        let sum = num1 + num2;
        callback(sum);
    }, 2000)
}

add(1,5, result => {
    console.log(result);
})