// alert("Hello How are you?");
console.log("Hello from the app.js page");

function clickHandler() {
    console.log("Translate button Clicked");
};

var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate)

btnTranslate.addEventListener("click", clickHandler);


