// alert("Hello How are you?");
console.log("Hello from the app.js page");

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
// console.log(txtInput)

function clickHandler() {
    console.log("Translate button Clicked");
    console.log("Input: "+txtInput.value)
};


// console.log(btnTranslate)

btnTranslate.addEventListener("click", clickHandler);


