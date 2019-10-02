console.log("hello");


const weatherForm = document.querySelector('form');
const search = document.querySelector('input'); // stores input value that user uses
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');


// messageOne.textContent = "Hello";

weatherForm.addEventListener('submit', e => { // calls when user clicks on "submit" button
    e.preventDefault(); // prevents reloading after pressing submit
    messageOne.textContent = "Loading...";
    messageTwo.textContent = ""; 
    const location = search.value; // gets search value
    fetch(`http://localhost:3000/weather?address=${location}`)  // taking url from the localhost SERVER & making a request
        .then(response => {
            response.json().then(data => {
                if(data.err) {
                    messageOne.textContent = data.err;
                } else {
                    messageOne.textContent = data.location;
                    messageTwo.textContent = data.forecast;
                }
            }).catch(responseError => { 
                messageOne.textContent = responseError;
                console.log("Error in response.json(), responseError is: " + responseError)
            })
        }).catch(err => { 
            messageOne.textContent = err;
            console.log("Error in fetching, err is " + err) 
        });
})