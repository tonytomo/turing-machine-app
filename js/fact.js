var nf = document.getElementById("nf"); // Factorial

var i;          // iteration for loop
var crAct;      // Current active block
var it;         // Moves iteration, ++ kekanan, -- kekiri
var state;      // State

var looper;     // Auto moves
var done;       // Flag done
var f = [];     // Factorial

// List untuk turing machine
var factLine = [];
// Turing machine
var factTmLine = document.getElementById("factTm");

// After click = button
function doFact() {
    // Write here...
    factLine.push(new Blockfact("C"));
}

// Auto move
function doFactAuto() {
    // Write here...
    looper = setInterval(doFactNext, 400);
}

// Stop auto moves
function stopFactAuto() {
    // Clear interval
    clearInterval(looper);
}

// Next move
function doFactNext() {
    // *******************************
    //            FAKTORIAL
    //      Tempat untuk tiap state
    // *******************************
    // Tulis dibawah ini...
    // Jika TM sudah terisi
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
function doFactClear() {
    // Write here...
    // Declare list to null and opsLine to null
    factTmLine.innerHTML = "";
    factLine = [];

    // Change ans field
    var ansField = document.getElementById("factAns");
    ansField.textContent = 0;
}

// Show answer
function showFactAns() {
    // Write here...
    var ans = 0;    // Jawaban

    // ans faktorial
    ans = factorial(nf.value);

    // Show answer on ans field
    var ansField = document.getElementById("factAns");
    ansField.textContent = ans;
}

// Faktorial
function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}