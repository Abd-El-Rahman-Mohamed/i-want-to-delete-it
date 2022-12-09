const theQ = document.querySelector('#questionTextArea');
const askBTN = document.querySelector('#submitQ');

let ask = "";
let url = "";
let ans = "";

askBTN.addEventListener('click', () => {
    console.log('btn is clicked');
    ask = theQ.value;
    url = "https://api.pawan.krd/chat/gpt?text=" + urlParser(ask) + "&lang=en/gpt.json";

    let myJSON;
    fetch(url)
        .then(response => response.json())
        .then(data => myJSON = data)
        .then(() => console.log(myJSON))
        .catch(error => console.error(error));
});

// To make the question able to be sent
function urlParser(beforeParse) {
    return "" + beforeParse.replaceAll(" ", "%20");
}