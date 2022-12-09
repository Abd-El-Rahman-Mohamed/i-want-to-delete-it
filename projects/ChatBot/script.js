const theQ = document.querySelector('#questionTextArea');
const askBTN = document.querySelector('#submitQ');

// askBTN.addEventListener('click', ()=>{
//     console.log(theQ.value);
// });

let ask = "";
let url = "";
let ans = "";

askBTN.addEventListener('click', () => {
    ask = theQ.value;
    url = "https://api.pawan.krd/chat/gpt?text=" + urlParser(ask) + "&lang=en/gpt.json";

    // Sending a request when the btn is clicked
    // const request = new XMLHttpRequest();

    // try {
    //     request.open('GET', url);

    //     request.responseType = 'text';

    //     request.addEventListener('load', () => alert("The requset is fully loaded"));
    //     request.addEventListener('load', () => ans = request.response);
    //     request.addEventListener('error', () => console.error('XHR error'));

    //     request.send();

    // } catch (error) {
    //     console.error(`XHR error ${request.status}`);
    // }

    var responseClone; // 1
    fetch(url)
        .then(function (response) {
            responseClone = response.clone(); // 2
            return response.json();
        })
        .then(function (data) {
            // Do something with data
        }, function (rejectionReason) { // 3
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
            responseClone.text() // 5
                .then(function (bodyText) {
                    console.log('Received the following instead of valid JSON:', bodyText); // 6
                });
        });
});

// To make the question able to be sent
function urlParser(beforeParse) {
    return "" + beforeParse.replaceAll(" ", "%20");
}

// let promiseAsker = fetch(url);
// promiseAsker.then(result => result.json())
// .then(result => {
//     console.log(result);
// })

// promiseAsker.then((response) => {
//     let json = response.json();
//     return json;
// })
// .then(json => ans += json[html]);
