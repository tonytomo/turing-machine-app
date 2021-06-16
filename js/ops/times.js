function timesMove() {
    // Write here...
    // Jika TM sudah terisi
    if (opsLine[0]) {
        // Deactivate block
        crAct = document.getElementsByClassName("active");
        for (i = 0; i < crAct.length; i++) {
            crAct[i].className = crAct[i].className.replace(" active", "");
        }

        // STATE 0
        if (state == 0) {
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
                state = 1;

                // Ke kanan
                it++;
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
            // B, C / L
            else if (opsLine[it].content == "B") {
                // Add blank block
                opsLine.push(new Blockops("B"));

                // Change textContent
                opsLine[it].changeTo("C");
                opsTmLine.childNodes[it].textContent = "C";

                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it + 1].scrollIntoView(false);

                // Change state
                state = 2;

                // Ke kiri
                it--;
            }
        }

        // STATE 2
        else if (state == 2) {
            // 0, 0 / L
            if (opsLine[it].content == "0") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it + 1].scrollIntoView(false);

                // Ke kiri
                it--;
            }
            // C, C / R
            else if (opsLine[it].content == "C") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it + 1].scrollIntoView(false);

                // Change state
                state = 3;

                // Ke kanan
                it++;
            }
        }

        // STATE 3
        else if (state == 3) {
            // X, X / R
            if (opsLine[it].content == "X") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Ke kanan
                it++;
            }
            // 0, X / L
            else if (opsLine[it].content == "0") {
                // Change textContent
                opsLine[it].changeTo("X");
                opsTmLine.childNodes[it].textContent = "X";

                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Change state
                state = 4;

                // Ke kiri
                it--;
            }
            // C, B / R
            else if (opsLine[it].content == "C") {
                // Change textContent
                opsLine[it].changeTo("B");
                opsTmLine.childNodes[it].textContent = "B";

                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Change state
                state = 12;

                // Ke kanan
                it++;
            }
        }

        // STATE 4
        else if (state == 4) {
            // X, X / L
            if (opsLine[it].content == "X") {
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
                state = 5;

                // Ke kiri
                it--;
            }
        }

        // STATE 5
        else if (state == 5) {
            // Y, Y / L
            if (opsLine[it].content == "Y") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Ke kiri
                it--;
            }
            // 0, Y / R
            else if (opsLine[it].content == "0") {
                // Change textContent
                opsLine[it].changeTo("Y");
                opsTmLine.childNodes[it].textContent = "Y";

                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Change state
                state = 6;

                // Ke kanan
                it++;
            }
            // B, B / R
            else if (opsLine[it].content == "B") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Change state
                state = 11;

                // Ke kanan
                it++;
            }
        }

        // STATE 6
        else if (state == 6) {
            // Y, Y / R
            if (opsLine[it].content == "Y") {
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
                state = 7;

                // Ke kanan
                it++;
            }
        }

        // STATE 7
        else if (state == 7) {
            // 0, 0 / R || X, X / R
            if (opsLine[it].content == "0" || opsLine[it].content == "X") {
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
                state = 8;

                // Ke kanan
                it++;
            }
        }

        // STATE 8
        else if (state == 8) {
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
                // Add blank block
                opsLine.push(new Blockops("B"));

                // Change textContent
                opsLine[it].changeTo("0");
                opsTmLine.childNodes[it].textContent = "0";

                // Result
                opsTmLine.childNodes[it].className += " result";

                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it + 1].scrollIntoView(false);

                // Change state
                state = 9;

                // Ke kiri
                it--;
            }
        }

        // STATE 9
        else if (state == 9) {
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
                state = 10;

                // Ke kiri
                it--;
            }
        }

        // STATE 10
        else if (state == 10) {
            // 0, 0 / L || X, X / L
            if (opsLine[it].content == "0" || opsLine[it].content == "X") {
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
                state = 5;

                // Ke kiri
                it--;
            }
        }

        // STATE 11
        else if (state == 11) {
            // Y, 0 / R
            if (opsLine[it].content == "Y") {
                // Change textContent
                opsLine[it].changeTo("0");
                opsTmLine.childNodes[it].textContent = "0";

                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Ke kanan
                it++;
            }
            // C, C / R
            else if (opsLine[it].content == "C") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Change state
                state = 3;

                // Ke kanan
                it++;
            }
        }

        // STATE 12 (FINAL STATE)
        else if (state == 12) {
            // Selesai
            stopOpsAuto();
            opsTmLine.childNodes[it + 1].scrollIntoView(false);

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