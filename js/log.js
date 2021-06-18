var nl = document.getElementById("nl"); // Logaritma biner

var i;          // iteration for loop
var crAct;      // Current active block
var it;         // Moves iteration, ++ kekanan, -- kekiri
var state;      // State

var looper;     // Auto moves
var done;       // Flag done

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
    if (opsLine[0]) {
        // Deactivate block
        crAct = document.getElementsByClassName("active");
        for (i = 0; i < crAct.length; i++) {
            crAct[i].className = crAct[i].className.replace(" active", "");
        }

        done = 0;

        moving(0, 1, "1", "X", 1);
        moving(0, 3, "!", "!", 1);

        // STATE 5 (FINAL STATE)
        if (state == 5) {
            // Selesai
            stopOpsAuto();
            opsTmLine.childNodes[it].scrollIntoView(false);

            // Enable control
            enableOps(2);

            // Disable control
            disableOps(0);
            disableOps(1);
            disableOps(3);

            // Show answer in decimal
            showOpsAns();
        }
    }
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