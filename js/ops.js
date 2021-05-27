var n1 = document.getElementById("n1");     // Number 1
var ops = document.getElementById("ops");   // Operation
var n2 = document.getElementById("n2");     // Number 2

// List untuk turing machine
var opsLine = [];
// Turing machine
var opsTmLine = document.getElementById("opsTm");

// After click = button
function doOps() {
    // Write here...
    opsLine.push(new Blockops("B"));
}

// Auto move
function doOpsAuto() {
    // Write here...
    // also use fun scrollIntoView() to track active block
    // use childNodes fun to activate by adding active class
    // use setTimeout with iterations instead of for loop
    // fun doOpsNext() inside setTimeout

}

// Next move
function doOpsNext() {
    // Write here...

}

// Previous move
function doOpsPrev() {
    // Write here...
    
}

// Clear TM
function doOpsClear() {
    // Write here...
    // Declare list to null and opsLine to null
    opsTmLine.innerHTML = "";
    opsLine = [];
}