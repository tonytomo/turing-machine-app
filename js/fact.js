var nf = document.getElementById("nf"); // Factorial

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
    // Write here...

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

    // Show answer on ans field
    var ansField = document.getElementById("factAns");
    ansField.textContent = ans;
}