
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', e => {
    e.preventDefault(); // prevents page from reloading after pressing submit
    messageOne.textContent = "Loading..." // will change after successful fetch
    messageTwo.textContent = "";
    const location = search.value;
    fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
        response.json().then(data => {
            if(data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        }).catch(err => {
            messageOne.textContent = err;
            console.log("Json error: " + err);
        })
    }).catch(error => {
        messageOne.textContent = error;
        console.log("Fetch error: " + error);
    })
})