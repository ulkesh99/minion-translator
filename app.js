var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("Oops! Something wrong with server! Please try again after sometime.")
}

function clickHandler() {
   var inputText = txtInput.value;

   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
       var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText })
   .catch(errorHandler)     
};

btnTranslate.addEventListener("click", clickHandler)