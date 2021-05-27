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

}

// Next move
function doFactNext() {
    // Write here...

}

// Previous move
function doFactPrev() {
    // Write here...
    
}

// Clear TM
function doFactClear() {
    // Write here...
    // Declare list to null and opsLine to null
    factTmLine.innerHTML = "";
    factLine = [];
}