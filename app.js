// alert("Hello How are you?");
console.log("Hello from the app.js page");

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");
// console.log(txtInput)

// outputDiv.innerText = "Varuni Pandey"

function clickHandler() {
    // console.log("Translate button Clicked");
    // console.log("Input: "+txtInput.value)
    outputDiv.innerText = "hgbfjrgfksbrffgikin " + txtInput.value;
};


// console.log(btnTranslate)

btnTranslate.addEventListener("click", clickHandler);


