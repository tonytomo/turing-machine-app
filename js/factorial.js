const operand = document.getElementById("operand"); // Factorial

var moveDirection; // Moves iteration, ++ right, -- left
var state; // State for turing machine
var looper; // Animation
let speed = 100; // Speed for auto moves in ms

// Blocks for Turing Machine
var blocks = [];

// Turing machine
var visualBox = document.getElementById("factTm");

// Log box
const log = document.getElementById("log");

// After click = button
function generate() {
    // If input field is filled
    let operandValue = parseInt(operand.value);

    //jika input field terisi
    if (operandValue) {
        // CLear
        factClearBox();

        // Jika input negatif
        if (operandValue < 0) {
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

        blocks.push(new Blockfact("B"));
        blocks.push(new Blockfact("B"));
        visualBox.childNodes[1].className += " active";
        moveDirection = 2;
        state = 0;

        // Jika Nilainya 0
        if (operandValue == 0) {
            blocks.push(new Blockfact("0"));
        }
        // Jika lbih dari 0
        else {
            for (let i = 0; i < operandValue; i++) {
                blocks.push(new Blockfact("1"));
            }
        }

        // Limiter
        blocks.push(new Blockfact("!"));
        blocks.push(new Blockfact("="));

        blocks.push(new Blockfact("B"));
        blocks.push(new Blockfact("B"));
    }
}

// Auto move
function factPlay() {
    // Enable control
    enableControl("halt");

    // Disable control
    disableControl("speed");
    disableControl("auto");
    disableControl("clearBox");
    disableControl("next");

    looper = setInterval(factNext, speed);
}

// Stop auto moves
function factHalt() {
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

// Next move
function factNext() {
    // *******************************
    //            FAKTORIAL
    //      Tempat untuk tiap state
    // *******************************
    // Tulis dibawah ini...
    // Jika TM sudah terisi
    if (blocks[0]) {
        // Deactivate block
        let activeBlock = document.getElementsByClassName("active");
        for (let i = 0; i < activeBlock.length; i++) {
            activeBlock[i].className = activeBlock[i].className.replace(
                " active",
                ""
            );
        }

        done = 0;

        movingf(0, 1, "1", "X", 1);
        movingf(0, 18, "0", "0", 1);
        movingf(0, 3, "!", "!", 1);
        movingf(1, 1, "1", "1", 1);
        movingf(1, 1, "!", "!", 1);
        movingf(1, 1, "=", "=", 1);
        movingf(1, 2, "B", "1", 0, 1);
        movingf(2, 2, "1", "1", 0);
        movingf(2, 2, "!", "!", 0);
        movingf(2, 2, "=", "=", 0);
        movingf(2, 0, "X", "X", 1);
        movingf(3, 3, "1", "1", 1);
        movingf(3, 3, "!", "!", 1);
        movingf(3, 3, "=", "=", 1);
        movingf(3, 4, "B", "*", 0, 1);
        movingf(4, 4, "1", "1", 0);
        movingf(4, 4, "!", "!", 0);
        movingf(4, 4, "=", "=", 0);
        movingf(4, 4, "X", "X", 0);
        movingf(4, 6, "Z", "Z", 1);
        movingf(4, 5, "B", "B", 1);
        movingf(5, 12, "X", "Y", 1);
        movingf(6, 13, "!", "!", 1);
        movingf(6, 7, "X", "Z", 1);
        movingf(7, 7, "1", "1", 1);
        movingf(7, 7, "X", "X", 1);
        movingf(7, 8, "!", "!", 1);
        movingf(8, 8, "=", "=", 1);
        movingf(8, 9, "1", "X", 1);
        movingf(8, 11, "*", "*", 0);
        movingf(9, 9, "1", "1", 1);
        movingf(9, 9, "*", "*", 1);
        movingf(9, 10, "B", "1", 0, 1);
        movingf(10, 10, "1", "1", 0);
        movingf(10, 10, "*", "*", 0);
        movingf(10, 8, "X", "X", 1);
        movingf(11, 11, "X", "1", 0);
        movingf(11, 4, "=", "=", 0);
        movingf(12, 15, "!", "!", 1);
        movingf(12, 6, "X", "Y", 1);
        movingf(13, 13, "1", "1", 1);
        movingf(13, 13, "=", "=", 1);
        movingf(13, 13, "*", "1", 1);
        movingf(13, 18, "B", "B", 0);
        movingf(14, 14, "1", "1", 0);
        movingf(14, 14, "!", "!", 0);
        movingf(14, 14, "=", "=", 0);
        movingf(14, 14, "Z", "X", 0);
        movingf(14, 15, "Y", "Y", 1);
        movingf(15, 15, "1", "1", 1);
        movingf(15, 15, "!", "!", 1);
        movingf(15, 15, "=", "=", 1);
        movingf(15, 15, "X", "X", 1);
        movingf(15, 16, "B", "*", 0, 1);
        movingf(15, 19, "*", "B", 0);
        movingf(16, 16, "1", "1", 0);
        movingf(16, 16, "!", "!", 0);
        movingf(16, 16, "=", "=", 0);
        movingf(16, 16, "X", "X", 0);
        movingf(16, 17, "Y", "Y", 1);
        movingf(17, 15, "!", "!", 1);
        movingf(17, 6, "X", "Y", 1);
        movingf(18, 14, "1", "B", 0);
        movingf(18, 18, "!", "!", 1);
        movingf(18, 18, "=", "=", 1);
        movingf(18, 19, "B", "1", 0, 1);
        movingf(19, 19, "1", "1", 0);
        movingf(19, 20, "=", "B", 0);
        movingf(20, 20, "!", "B", 0);
        movingf(20, 20, "Y", "B", 0);
        movingf(20, 20, "0", "B", 0);
        movingf(20, 21, "B", "B", 1);

        // STATE 21 (FINAL STATE)
        if (state == 21) {
            // Done!
            factHalt();
            visualBox.childNodes[moveDirection].scrollIntoView(false);

            // Add notif
            addLog("Done!");

            // Enable control
            enableControl("clearBox");

            // Disable control
            disableControl("speed");
            disableControl("auto");
            disableControl("halt");
            disableControl("next");

            // Show answer in decimal
            show();
        }
    }
}

// Clear TM
function factClearBox() {
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

    // Change ans field
    var resultBox = document.getElementById("result");
    resultBox.value = "...";
}

// Show answer
function show() {
    let ans = 0;

    const children = Array.from(visualBox.childNodes);

    for (let i = 0; i < children.length; i++) {
        if (children[i].innerHTML == "1") {
            children[i].className += " answer";
            ans++;
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
