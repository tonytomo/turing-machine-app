var nl = document.getElementById("nl"); // Logaritma biner

// List untuk turing machine
var logLine = [];
// Turing machine
var logTmLine = document.getElementById("logTm");

// After click = button
function doLog() {
    // Write here...
    logLine.push(new Blocklog("A"));
}

// Auto move
function doLogAuto() {
    // Write here...
    
}

// Stop auto moves
function stopLogAuto() {
    // Clear interval
    clearInterval(looper);
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
    // Declare list to null and opsLine to null
    logTmLine.innerHTML = "";
    logLine = [];
}