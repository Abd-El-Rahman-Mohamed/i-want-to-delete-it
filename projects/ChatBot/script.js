const theQ = document.querySelector('#questionTextArea');
const askBTN = document.querySelector('#submitQ');

let ask = "";
let url = "";
let ans = "";

askBTN.addEventListener('click', () => {
    ask = theQ.value;
    url = "https://api.pawan.krd/chat/gpt?text=" + urlParser(ask) + "&lang=en/gpt.json";

    
});

// To make the question able to be sent
function urlParser(beforeParse) {
    return "" + beforeParse.replaceAll(" ", "%20");
}