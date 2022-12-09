const theQ = document.querySelector('#questionTextArea');
const askBTN = document.querySelector('#submitQ');

// askBTN.addEventListener('click', ()=>{
//     console.log(theQ.value);
// });

let ask = "";
let url =  "";
let ans = "";

askBTN.addEventListener('click', ()=>{
    ask = theQ.value;
    url =  "https://api.pawan.krd/chat/gpt?text=" + urlParser(ask) + "&lang=en";
});

// To make the question able to be sent
function urlParser(beforeParse) {
    return "" + beforeParse.replaceAll(" ", "%20");
}

let promiseAsker = fetch(url);
promiseAsker.then(result => result.json())
.then(result => {
    console.log(result);
})

// promiseAsker.then((response) => {
//     let json = response.json();
//     return json;
// })
// .then(json => ans += json[html]);
