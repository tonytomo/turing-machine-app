function subMove() {
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
            // C, C / R
            else if (opsLine[it].content == "C") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it + 1].scrollIntoView(false);

                // Change state
                state = 5;

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
            // X, X / R
            if (opsLine[it].content == "X") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it + 1].scrollIntoView(false);

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
                opsTmLine.childNodes[it + 1].scrollIntoView(false);

                // Change state
                state = 3;

                // Ke kiri
                it--;
            }
        }

        // STATE 3
        else if (state == 3) {
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
            // X, B / R
            if (opsLine[it].content == "X") {
                // Change textContent
                opsLine[it].changeTo("B");
                opsTmLine.childNodes[it].textContent = "B";

                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Ke kanan
                it++;
            }
            // 0, 0 / L
            else if (opsLine[it].content == "0") {
                // Activate block
                opsTmLine.childNodes[it].className += " active";
                opsTmLine.childNodes[it - 1].scrollIntoView(false);

                // Change state
                state = 6;

                // Ke kiri
                it--;
            }
        }

        // STATE 6 (FINAL STATE)
        else if (state == 6) {
            // Selesai
            stopOpsAuto();
            opsTmLine.childNodes[it].className += " active";
            opsTmLine.childNodes[opsLine.length - 3].scrollIntoView(false);

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