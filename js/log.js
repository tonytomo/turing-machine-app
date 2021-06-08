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
    looper = setInterval(doLogNext, 400);
}

// Stop auto moves
function stopLogAuto() {
    // Clear interval
    clearInterval(looper);
}

// Next move
function doLogNext() {
    // *******************************
    //          LOGARITMA BINER
    //      Tempat untuk tiap state
    // *******************************
    // Tulis dibawah ini...

}

// Clear TM
function doLogClear() {
    // Write here...
    // Declare list to null and opsLine to null
    logTmLine.innerHTML = "";
    logLine = [];

    // Change ans field
    var ansField = document.getElementById("logAns");
    ansField.textContent = 0;
}

// Show answer
function showLogAns() {
    // Write here...
    var ans = 0;    // Jawaban

    // log_2 ans

    // Show answer on ans field
    var ansField = document.getElementById("logAns");
    ansField.textContent = ans;
}