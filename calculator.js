const display = document.getElementById("display");

//Appends the display with the input
function appendToDisplay(input){
    if (/[a-z]/i.test(display.value)) {
        clearDisplay();
    }
    display.value += input;
}

//Calculates the displayed equation
function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(err){
        display.value = err.message;
    }
}

function clearDisplay(){
    display.value = "";
}