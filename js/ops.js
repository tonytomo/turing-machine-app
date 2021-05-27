var n1 = document.getElementById("n1");     // Number 1
var ops = document.getElementById("ops");   // Operation
var n2 = document.getElementById("n2");     // Number 2

// List untuk turing machine
var opsLine = [];

// After click = button
function doOps() {
    // Write here...
    opsLine.push(new Blockops("B"));
}

// Auto move
function doOpsAuto() {
    // Write here...

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
    var list = document.getElementById("opsTm");

    // Declare list to null and opsLine to null
    list.innerHTML = "";
    opsLine = [];
}