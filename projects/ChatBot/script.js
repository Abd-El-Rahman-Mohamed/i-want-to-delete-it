const theQ = document.querySelector('#questionTextArea');
const askBTN = document.querySelector('#submitQ');

let ask = "";
let url = "";
let ans = "";

askBTN.addEventListener('click', clickedAskBTN);

function clickedAskBTN() {
    console.log('The output of this question:');
    ask = theQ.value;

    let myJSON;
    fetch(url)
        .then(response => response.json())
        .then(data => myJSON = data)
        .then(() => console.log(myJSON))
        .catch(error => console.error(error));
}
// To make the question able to be sent
function urlParser(beforeParse) {
    return "" + beforeParse.replaceAll(" ", "%20");
}

(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();