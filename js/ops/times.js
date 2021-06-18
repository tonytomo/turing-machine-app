function timesMove() {
    // Write here...
    // Jika TM sudah terisi
    if (opsLine[0]) {
        // Deactivate block
        crAct = document.getElementsByClassName("active");
        for (i = 0; i < crAct.length; i++) {
            crAct[i].className = crAct[i].className.replace(" active", "");
        }

        done = 0;

        moving(0, 1, "C", "C", 1);
        moving(0, 0, "0", "0", 1);
        moving(1, 1, "0", "0", 1);
        moving(1, 2, "B", "C", 0, 1);
        moving(2, 2, "0", "0", 0);
        moving(2, 3, "C", "C", 1);
        moving(3, 3, "X", "X", 1);
        moving(3, 4, "0", "X", 0);
        moving(3, 12, "C", "B", 0);
        moving(4, 4, "X", "X", 0);
        moving(4, 5, "C", "C", 0);
        moving(5, 5, "Y", "Y", 0);
        moving(5, 6, "0", "Y", 1);
        moving(5, 11, "B", "B", 1);
        moving(6, 6, "Y", "Y", 1);
        moving(6, 7, "C", "C", 1);
        moving(7, 7, "0", "0", 1);
        moving(7, 7, "X", "X", 1);
        moving(7, 8, "C", "C", 1);
        moving(8, 8, "0", "0", 1);
        moving(8, 9, "B", "0", 0, 1);
        moving(9, 9, "0", "0", 0);
        moving(9, 10, "C", "C", 0);
        moving(10, 10, "0", "0", 0);
        moving(10, 10, "X", "X", 0);
        moving(10, 5, "C", "C", 0);
        moving(11, 11, "Y", "0", 1);
        moving(11, 3, "C", "C", 1);
        moving(12, 12, "X", "B", 0);
        moving(12, 13, "C", "B", 0);
        moving(13, 13, "0", "B", 0);
        moving(13, 14, "B", "B", 1);

        // STATE 14 (FINAL STATE)
        if (state == 14) {
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