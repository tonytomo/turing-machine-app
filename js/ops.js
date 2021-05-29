var n1 = document.getElementById("n1");     // Number 1
var ops = document.getElementById("ops");   // Operation
var n2 = document.getElementById("n2");     // Number 2

var i;          // iteration for loop
var crAct;      // Current active block
var it;         // Moves iteration, ++ kekanan, -- kekiri
var state;      // State

var looper;     // Auto moves

// List untuk turing machine
var opsLine = [];
// Turing machine
var opsTmLine = document.getElementById("opsTm");

// After click = button
// Create TM blocks
function doOps() {
    // Write here...
    doOpsClear();

    // Jika input field terisi
    if (n1.value && n2.value) {
        opsLine.push(new Blockops("B"));
        opsTmLine.childNodes[0].className += " active";
        it = 1;
        state = 0;

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

        opsLine.push(new Blockops("B"));
    }
}

// Auto move
function doOpsAuto() {
    // Write here...
    // also use fun scrollIntoView() to track active block
    // use childNodes fun to activate by adding active class
    // use setInterval(doOpsNext(), 500)

    // Penjumlahan
    if (ops.value == "add") {
        looper = setInterval(doOpsNext, 400); // do next move every .5 sec
    }

    // Pengurangan
    else if (ops.value == "sub") {

    }

    // Perkalian
    else if (ops.value == "times") {

    }

    // Pembagian
    else if (ops.value == "divide") {

    }

    // Modulo
    else if (ops.value == "mod") {

    }

    // Perpangkatan
    else if (ops.value == "exp") {

    }
}

// Stop auto moves
function stopOpsAuto() {
    // Clear interval
    clearInterval(looper);
}

// Next move
function doOpsNext() {
    // Penjumlahan
    if (ops.value == "add") {
        // Jika TM sudah terisi
        if (opsLine[0]) {
            // Deactivate block
            crAct = document.getElementsByClassName("active");
            crAct[0].className = crAct[0].className.replace(" active", "");

            // STATE 0
            if (state == 0) {
                // 0, X / R
                if (opsLine[it].content == "0") {
                    // Change textContent
                    opsLine[it].changeTo("X");
                    opsTmLine.childNodes[it].textContent = "X";

                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it + 1].scrollIntoView(false);

                    // Change state
                    state = 1;

                    // Ke kanan
                    it++;
                }
                // C, B / R
                else if (opsLine[it].content == "C") {
                    // Change textContent
                    opsLine[it].changeTo("B");
                    opsTmLine.childNodes[it].textContent = "B";

                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it + 1].scrollIntoView(false);

                    // Change state
                    state = 5;

                    // Ke kanan
                    // it++;
                }
            }

            // STATE 1
            else if (state == 1) {
                // 0, 0 / R
                if (opsLine[it].content == "0") {
                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it + 1].scrollIntoView(false);

                    // Ke kanan
                    it++;
                }
                // C, C / R
                else if (opsLine[it].content == "C") {
                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it + 1].scrollIntoView(false);

                    // Change state
                    state = 2;

                    // Ke kanan
                    it++;
                }
            }

            // STATE 2
            else if (state == 2) {
                // 0, 0 / R
                if (opsLine[it].content == "0") {
                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it + 1].scrollIntoView(false);

                    // Ke kanan
                    it++;
                }
                // B, 0 / L
                else if (opsLine[it].content == "B") {
                    // Tambah blank block
                    opsLine.push(new Blockops("B"));

                    // Change textContent
                    opsLine[it].changeTo("0");
                    opsTmLine.childNodes[it].textContent = "0";

                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it + 1].scrollIntoView(false);

                    // Change state
                    state = 3;

                    // Ke kiri
                    it--;
                }
            }

            // STATE 3
            else if (state == 3) {
                // 0, 0 / L
                if (opsLine[it].content == "0") {
                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it - 1].scrollIntoView(false);

                    // Ke kiri
                    it--;
                }
                // C, C / L
                else if (opsLine[it].content == "C") {
                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it - 1].scrollIntoView(false);

                    // Change state
                    state = 4;

                    // Ke kiri
                    it--;
                }
            }

            // STATE 4
            else if (state == 4) {
                // 0, 0 / L
                if (opsLine[it].content == "0") {
                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it - 1].scrollIntoView(false);

                    // Ke kiri
                    it--;
                }
                // X, X / R
                else if (opsLine[it].content == "X") {
                    // Activate block
                    opsTmLine.childNodes[it].className += " active";
                    opsTmLine.childNodes[it - 1].scrollIntoView(false);

                    // Change state
                    state = 0;

                    // Ke kanan
                    it++;
                }
            }

            // STATE 5
            else if (state == 5) {
                // Selesai
                stopOpsAuto();
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it].scrollIntoView(false);

                // Show answer in decimal
                showOpsAns();
            }
        }
    }

    // Pengurangan
    else if (ops.value == "sub") {

    }

    // Perkalian
    else if (ops.value == "times") {

    }

    // Pembagian
    else if (ops.value == "divide") {

    }

    // Modulo
    else if (ops.value == "mod") {

    }

    // Perpangkatan
    else if (ops.value == "exp") {

    }
}

// Previous move
function doOpsPrev() {
    // Write here...
    // Penjumlahan
    if (ops.value == "add") {

    }

    // Pengurangan
    else if (ops.value == "sub") {

    }

    // Perkalian
    else if (ops.value == "times") {

    }

    // Pembagian
    else if (ops.value == "divide") {

    }

    // Modulo
    else if (ops.value == "mod") {

    }

    // Perpangkatan
    else if (ops.value == "exp") {

    }
}

// Clear TM
function doOpsClear() {
    // Write here...
    // Declare list to null and opsLine to null
    opsTmLine.innerHTML = "";
    opsLine = [];

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
        ans = n1.value / n2.value;
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