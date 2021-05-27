var nl = document.getElementById("nl"); // Logaritma biner

// List untuk turing machine
var logLine = [];

// After click = button
function doLog() {
    // Write here...
    logLine.push(new Blocklog("A"));
}

// Auto move
function doLogAuto() {
    // Write here...
    
}

// Next move
function doLogNext() {
    // Write here...

}

// Previous move
function doLogPrev() {
    // Write here...
    
}

// Clear TM
function doLogClear() {
    // Write here...
    var list = document.getElementById("logTm");
    
    // Declare list to null and opsLine to null
    list.innerHTML = "";
    logLine = [];
}