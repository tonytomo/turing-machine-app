const operand = document.getElementById("operand"); // Logaritma biner

var moveDirection; // Moves iteration, ++ kekanan, -- kekiri
var state; // State
var looper; // Auto moves
let speed = 100; // Kecepatan auto moves dalam ms

// List untuk turing machine
var blocks = [];

// Turing machine
var visualBox = document.getElementById("logTm");

// After click = button
function generate() {

    // If input field is filled
    let operandValue = parseInt(operand.value);

    if (operandValue) {
        // CLear
        logClearBox();

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

        blocks.push(new Blocklog("B"));
        blocks.push(new Blocklog("B"));
        visualBox.childNodes[1].className += " active";
        moveDirection = 2;
        state = 0;

        // Ubah log(n) ke unary
        for (let i = 0; i < operandValue; i++) {
            blocks.push(new Blocklog("1"));
        }

        blocks.push(new Blocklog("B"));
        blocks.push(new Blocklog("B"));
    }
}

// Auto move
function logPlay() {
    // Enable control
    enableControl("halt");

    // Disable control
    disableControl("speed");
    disableControl("auto");
    disableControl("clearBox");
    disableControl("next");

    looper = setInterval(logNext, speed); // do next move every 100ms
}

// Stop auto moves
function logHalt() {
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
function logNext() {
    // *******************************
    //          LOGARITMA BINER
    //      Tempat untuk tiap state
    // *******************************
    // Tulis dibawah ini...
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

        movingl(0, 1, "1", "1", 1);
        movingl(0, 12, "B", "B", 1);
        movingl(1, 2, "1", "1", 1);
        movingl(1, 11, "B", "B", 0);
        movingl(2, 3, "1", "C", 1);
        movingl(2, 11, "B", "B", 0);
        movingl(3, 3, "C", "C", 1);
        movingl(3, 4, "1", "C", 0);
        movingl(3, 7, "B", "B", 0);
        movingl(4, 4, "0", "0", 0);
        movingl(4, 4, "1", "1", 0);
        movingl(4, 4, "C", "C", 0);
        movingl(4, 5, "B", "B", 1);
        movingl(5, 5, "1", "0", 1);
        movingl(5, 6, "0", "1", 1);
        movingl(5, 6, "C", "1", 1);
        movingl(6, 6, "0", "0", 1);
        movingl(6, 6, "1", "1", 1);
        movingl(6, 3, "C", "C", 1);
        movingl(7, 7, "0", "0", 0);
        movingl(7, 7, "1", "1", 0);
        movingl(7, 7, "C", "B", 0);
        movingl(7, 8, "B", "B", 1);
        movingl(8, 8, "0", "1", 1);
        movingl(8, 9, "1", "1", 1);
        movingl(9, 9, "0", "1", 1);
        movingl(9, 10, "1", "1", 1);
        movingl(9, 11, "B", "B", 0);
        movingl(10, 10, "0", "1", 1);
        movingl(10, 10, "1", "1", 1);
        movingl(10, 12, "B", "B", 0);
        movingl(11, 12, "1", "B", "1");

        // STATE 12 (FINAL STATE)
        if (state == 12) {
            // Done!
            logHalt();
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
function logClearBox() {
    // Write here...
    // Declare list to null and LogLine to null
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

    // Add notif
    addLog("...");

    // Change ans field
    var resultBox = document.getElementById("logAns");
    resultBox.value = "...";
}

// Show answer
function show() {
    var ans = 0; // Jawaban

    const children = Array.from(visualBox.childNodes);

    for (let i = 0; i < children.length; i++) {
        if (children[i].innerHTML == "1") {
            children[i].className += " answer";
            ans++;
        }
    }

    // Show answer on ans field
    var resultBox = document.getElementById("logAns");
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
