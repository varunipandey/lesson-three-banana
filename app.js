// alert("Hello How are you?");
console.log("Hello from the app.js page");

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");
// console.log(txtInput)

// outputDiv.innerText = "Varuni Pandey"

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/"

function getTranslationUrl(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured ", error)
    alert("Something wrong with server! try again after some time.")
}

function clickHandler() {
    // console.log("Translate button Clicked");
    // console.log("Input: "+txtInput.value)
    // outputDiv.innerText = "hgbfjrgfksbrffgikin " + txtInput.value;
    var translationInput = txtInput.value;
    fetch(getTranslationUrl(translationInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translated;
        })
        .catch(errorHandler)
};


// console.log(btnTranslate)

btnTranslate.addEventListener("click", clickHandler);