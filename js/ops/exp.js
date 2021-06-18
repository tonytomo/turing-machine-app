function expMove() {
    // *******************************
    //       EXPONENT/PERPANGKATAN
    //      Tempat untuk tiap state
    // *******************************
    // Tulis dibawah ini...
    if (opsLine[0]) {
        // Deactivate block
        crAct = document.getElementsByClassName("active");
        for (i = 0; i < crAct.length; i++) {
            crAct[i].className = crAct[i].className.replace(" active", "");
        }

        done = 0;

        moving(0, 1, "1", "X", 1);
        moving(0, 3, "!", "!", 1);

        // STATE 5 (FINAL STATE)
        if (state == 5) {
            // Selesai
            stopOpsAuto();
            opsTmLine.childNodes[it].scrollIntoView(false);

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