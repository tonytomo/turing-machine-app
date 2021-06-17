var n1 = document.getElementById("n1");     // Number 1
var ops = document.getElementById("ops");   // Operation
var n2 = document.getElementById("n2");     // Number 2

var i;          // iteration for loop
var crAct;      // Current active block
var it;         // Moves iteration, ++ kekanan, -- kekiri
var state;      // State

var looper;     // Auto moves
var done;       // Flag done

// List untuk turing machine
var opsLine = [];
// Turing machine
const opsTmLine = document.getElementById("opsTm");

// Selector controller
const opscontrol = document.querySelectorAll(".opscontrol");

// After click = button
// Create TM blocks
function doOps() {
    // Write here...

    // Jika input field terisi
    if (n1.value && n2.value) {
        // Clear
        doOpsClear();

        // Enable control
        enableOps(0);
        enableOps(2);
        enableOps(3);

        // Disable control
        disableOps(1);

        opsLine.push(new Blockops("B"));
        opsLine.push(new Blockops("B"));
        opsTmLine.childNodes[1].className += " active";
        it = 2;
        state = 0;

        // Jika pengurangan dan n1 > n2
        if (n1.value > n2.value && ops.value == "sub") {
            // Number 2
            for (i = 0; i < n2.value; i++) {
                opsLine.push(new Blockops("0"));
            }
            // Limiter
            opsLine.push(new Blockops("C"));

            // Number 1
            for (i = 0; i < n1.value; i++) {
                opsLine.push(new Blockops("0"));
            }
        } else {
            // Number 1
            for (i = 0; i < n1.value; i++) {
                opsLine.push(new Blockops("0"));
            }

            // Limiter
            opsLine.push(new Blockops("C"));

            // Number 2
            for (i = 0; i < n2.value; i++) {
                opsLine.push(new Blockops("0"));
            }
        }

        opsLine.push(new Blockops("B"));
        opsLine.push(new Blockops("B"));
    }
}

// Auto move
function doOpsAuto() {
    // Write here...
    // also use fun scrollIntoView() to track active block
    // use childNodes fun to activate by adding active class
    // use setInterval(doOpsNext(), 500)

    // Enable control
    enableOps(1);

    // Disable control
    disableOps(0);
    disableOps(2);
    disableOps(3);

    looper = setInterval(doOpsNext, 200); // do next move every .2 sec
}

// Stop auto moves
function stopOpsAuto() {
    // Enable control
    enableOps(0);
    enableOps(2);
    enableOps(3);

    // Disable control
    disableOps(1);

    // Clear interval
    clearInterval(looper);
}

// Next move
function doOpsNext() {
    // Penjumlahan
    if (ops.value == "add") {
        addMove();
    }

    // Pengurangan
    else if (ops.value == "sub") {
        subMove();
    }

    // Perkalian
    else if (ops.value == "times") {
        timesMove();
    }

    // Pembagian
    else if (ops.value == "divide") {
        divideMove();
    }

    // Modulo
    else if (ops.value == "mod") {
        modMove();
    }

    // Perpangkatan
    else if (ops.value == "exp") {
        expMove();
    }
}

// Clear TM
function doOpsClear() {
    // Write here...
    // Declare list to null and opsLine to null
    opsTmLine.innerHTML = "";
    opsLine = [];

    // Disable all control
    disableOps(0);
    disableOps(1);
    disableOps(2);
    disableOps(3);

    // Clear interval
    clearInterval(looper);

    // Change answer field
    var ansField = document.getElementById("opsAns");
    ansField.textContent = 0;
}

// Show answer
function showOpsAns() {
    // Write here...
    var ans = 0;    // Jawaban
    // Penjumlahan
    if (ops.value == "add") {
        ans = +n1.value + +n2.value;
    }

    // Pengurangan
    else if (ops.value == "sub") {
        ans = n1.value - n2.value;
    }

    // Perkalian
    else if (ops.value == "times") {
        ans = n1.value * n2.value;
    }

    // Pembagian
    else if (ops.value == "divide") {
        ans = Math.floor(n1.value / n2.value);
    }

    // Modulo
    else if (ops.value == "mod") {
        ans = n1.value % n2.value;
    }

    // Perpangkatan
    else if (ops.value == "exp") {
        ans = Math.pow(n1.value, n2.value);
    }

    // Show answer on ans field
    var ansField = document.getElementById("opsAns");
    ansField.textContent = ans;
}

// Enable controller
function enableOps(index) {
    opscontrol[index].disabled = false;
}

// Disable controller
function disableOps(index) {
    opscontrol[index].disabled = true;
}