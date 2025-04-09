const display = document.getElementById("display");

function appendToDisplay(input){
    if (/[a-z]/i.test(display.value)) {
        clearDisplay();
    }
    display.value += input;
}

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
