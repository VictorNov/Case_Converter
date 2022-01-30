let getUserInput = () => document.getElementById("editor").value;
let userInput = '';

function upperCase() {
    userInput = getUserInput();
    document.getElementById("editor").value = userInput.toUpperCase();
}

function lowerCase() {
    userInput = getUserInput();
    document.getElementById("editor").value = userInput.toLowerCase();
}

function properCase() {
    userInput = getUserInput().toLowerCase();

    let userInputArray = userInput.split("");
    let result = "";

    for (let i = 0; i < userInputArray.length; i++) {
        if (i === 0) {
            result = userInputArray[0].toUpperCase();
        } else if (userInputArray[i - 1] === " " || userInputArray[i - 1] === "\n") {
            result += userInputArray[i].toUpperCase();
        } else {
            result += userInputArray[i];
        }
    }
    result.toString();
    document.getElementById("editor").value = result;
}

function sentenceCase() {
    userInput = getUserInput().toLowerCase();

    let userInputArray = userInput.split("");
    let result = "";

    for (let i = 0; i < userInputArray.length; i++) {
        if (i === 0) {
            result = userInputArray[0].toUpperCase();
        } else if ((userInputArray[i - 1] === " " || userInputArray[i - 1] === "\n") && (userInputArray[i - 2] === "." || userInputArray[i - 2] === "?" || userInputArray[i - 2] === "!")) {
            result += userInputArray[i].toUpperCase();
        } else {
            result += userInputArray[i];
        }
    }
    result.toString();
    document.getElementById("editor").value = result;
}

function saveFile() {
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

// Start file download.
    download("text.txt",document.getElementById("editor").value);
}