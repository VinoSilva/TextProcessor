var inputText;
var outputText;
var findInputText;
var replaceInputText;
var countOutputText;

function Replace() {
    console.log("Replace text");

    var output = new String(inputText.value);
    
    output = output.replace(findInputText.value,replaceInputText.value); 
    
    outputText.value = output; 
}

function ReplaceAll() {
    console.log("Replace all text");
    
    var output = new String(inputText.value);
    
    output = output.split(findInputText.value).join(replaceInputText.value); 
    output = new String(output);
    
    outputText.value = output; 
}

function Capitalize()
{
    console.log("Capitalize");

    var output = new String(inputText.value);

    var arr = output.split(".");

    output = "";

    for(let i = 0;i < arr.length;i++)
    {
        var currentString = arr[i];

        currentString = currentString.trim();

        currentString = currentString.charAt(0).toUpperCase() + currentString.substr(1);

        output = output + currentString + ".";
    }

    outputText.value = output;
}

function CountChar()
{
    var output = new String(inputText.value).length;

    countOutputText.value = output;
}

function CountWord()
{
    countOutputText.value = new String(inputText.value).split(' ').length;
}

function bindEvents() {
    let btnReplace = document.getElementById("btnReplace");

    btnReplace.addEventListener("click",
        Replace
    );

    let btnReplaceAll = document.getElementById("btnReplaceAll");

    btnReplaceAll.addEventListener("click",
        // console.log("Replace all text");
        ReplaceAll
    );

    let btnCapitalize = document.getElementById("btnCapitalize");

    btnCapitalize.addEventListener("click",
        Capitalize
    );

    let btnCountChar = document.getElementById("btnCountChar");

    btnCountChar.addEventListener("click",
        CountChar
    );

    let btnCountWord = document.getElementById("btnCountWord");

    btnCountWord.addEventListener("click",
    CountWord
    );
}

function Initialize() {
    inputText = document.getElementById("inputText");
    outputText = document.getElementById("outputText");
    findInputText = document.getElementById("findInput");
    replaceInputText = document.getElementById("replaceInput");
    countOutputText = document.getElementById("countOutputText");
}

window.onload = () => {

    console.log("Window onload function");
    bindEvents();

    Initialize();
}