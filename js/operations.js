const firstOperand = document.getElementById("firstOperand"); // Number 1
const operation = document.getElementById("operation"); // Operation
const secondOperand = document.getElementById("secondOperand"); // Number 2

var moveDirection = 0; // Moves iteration, ++ right, -- left
var state = 0; // State for turing machine
var looper = 0; // Animation for auto moves
let speed = 100; // Speed for auto moves in ms

// Blocks for Turing Machine
var blocks = [];

// Turing machine visual box
const visualBox = document.getElementById("visualBox");

// Log box
const log = document.getElementById("log");

// After click = button
// Create TM blocks
function generate() {
    // Jika input field terisi
    let first = parseInt(firstOperand.value);
    let second = parseInt(secondOperand.value);
    if (first >= 0 && second >= 0) {
        // Clear
        clearBox();

        // Jika input negatif di perpangkatan dan modulus
        if (
            operation.value == "exponentiation" ||
            operation.value == "modulo"
        ) {
            if (first < 0 || second < 0) {
                addLog("Negative input!");
            } else {
                // Enable control
                enableControl("speed");
                enableControl("auto");
                enableControl("clearBox");
                enableControl("next");

                // Disable control
                disableControl("halt");
            }
        } else {
            // Enable control
            enableControl("speed");
            enableControl("auto");
            enableControl("clearBox");
            enableControl("next");

            // Disable control
            disableControl("halt");
        }
        blocks = [];
        blocks.push(new Blockops("B"));
        blocks.push(new Blockops("B"));
        visualBox.childNodes[1].className += " active";
        moveDirection = 2;
        state = 0;

        // Jika pengurangan dan firstOperand > secondOperand
        if (first > second && operation.value == "subtraction") {
            // Number 2
            for (let i = 0; i < second; i++) {
                blocks.push(new Blockops("0"));
            }
            // Limiter
            blocks.push(new Blockops("C"));

            // Number 1
            for (let i = 0; i < first; i++) {
                blocks.push(new Blockops("0"));
            }

            // Jika operasi perpangkatan
        } else if (operation.value == "exponentiation") {
            // Limiter C
            blocks.push(new Blockops("C"));

            // Number 1
            for (let i = 0; i < first; i++) {
                blocks.push(new Blockops("0"));
            }

            // Limiter 1
            blocks.push(new Blockops("1"));

            // Limiter C
            blocks.push(new Blockops("C"));

            // Number 2
            for (let i = 0; i < second; i++) {
                blocks.push(new Blockops("0"));
            }
        } else {
            // Number 1
            for (let i = 0; i < first; i++) {
                blocks.push(new Blockops("0"));
            }

            // Limiter
            blocks.push(new Blockops("C"));

            // Number 2
            for (let i = 0; i < second; i++) {
                blocks.push(new Blockops("0"));
            }
        }

        blocks.push(new Blockops("B"));
        blocks.push(new Blockops("B"));
    } else {
        addLog("Input is empty!");
    }
}

// Auto play the Turing Machine
function play() {
    // Enable control
    enableControl("halt");

    // Disable control
    disableControl("speed");
    disableControl("auto");
    disableControl("clearBox");
    disableControl("next");

    looper = setInterval(next, speed); // do next move every 100ms
}

// Stop auto play the Turing Machine
function halt() {
    // Enable control
    enableControl("speed");
    enableControl("auto");
    enableControl("clearBox");
    enableControl("next");

    // Disable control
    disableControl("halt");

    // Clear interval
    clearInterval(looper);
}

// Next move for Turing Machine
function next() {
    // Penjumlahan
    if (operation.value == "addition") {
        addition();
    }

    // Pengurangan
    else if (operation.value == "subtraction") {
        subtraction();
    }

    // Perkalian
    else if (operation.value == "multiplication") {
        multiplication();
    }

    // Pembagian
    else if (operation.value == "division") {
        division();
    }

    // Modulo
    else if (operation.value == "modulo") {
        modulo();
    }

    // Perpangkatan
    else if (operation.value == "exponentiation") {
        exponentiation();
    }
}

// Clear all Turing Machine blocks
function clearBox() {
    // Write here...
    // Declare list to null and blocks to null
    visualBox.innerHTML = "";
    blocks = [];

    // Disable all control
    disableControl("speed");
    disableControl("auto");
    disableControl("halt");
    disableControl("clearBox");
    disableControl("next");

    // Clear interval
    clearInterval(looper);

    // Add log
    addLog("...");

    // Change answer field
    const resultBox = document.getElementById("result");
    resultBox.value = "...";
}

// Show answer
function show() {
    let ans = 0;

    let first = parseInt(firstOperand.value);
    let second = parseInt(secondOperand.value);

    const children = Array.from(visualBox.childNodes);

    for (let i = 0; i < children.length; i++) {
        if (children[i].innerHTML == "0") {
            children[i].className += " answer";
            if (operation.value == "subtraction" && first < second) ans--;
            else ans++;
        }
    }

    // Show answer on ans field
    const resultBox = document.getElementById("result");
    resultBox.value = ans;
}

// Enable controller
function enableControl(elementId = "") {
    document.getElementById(elementId).disabled = false;
}

// Disable controller
function disableControl(elementId = "") {
    document.getElementById(elementId).disabled = true;
}

// Add log
function addLog(logMessage = "") {
    log.value = logMessage;
}

// Toggle speed
function speedToggle() {
    const speedButton = document.getElementById("speed");
    if (speed == 100) {
        speed = 50;
        speedButton.textContent = "2x";
    } else if (speed == 50) {
        speed = 20;
        speedButton.textContent = "5x";
    } else if (speed == 20) {
        speed = 10;
        speedButton.textContent = "10x";
    } else if (speed == 10) {
        speed = 5;
        speedButton.textContent = "20x";
    } else {
        speed = 100;
        speedButton.textContent = "1x";
    }
}
