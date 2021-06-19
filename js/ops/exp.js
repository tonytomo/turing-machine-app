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

        moving(0, 1, "C", "B", 1);
        moving(1, 1, "0", "0", 1);
        moving(1, 2, "1", "1", 1);
        moving(2, 3, "C", "B", 1);
        moving(3, 3, "0", "0", 1);
        moving(3, 4, "B", "C", 0);
        moving(4, 4, "0", "0", 0);
        moving(4, 5, "B", "B", 0);
        moving(5, 6, "1", "1", 0);
        moving(6, 6, "0", "0", 0);
        moving(6, 7, "B", "B", 1);
        moving(7, 7, "0", "0", 1);
        moving(7, 8, "1", "1", 1);
        moving(8, 9, "0", "B", 0);
        moving(8, 8, "B", "B", 1);
        moving(9, 10, "1", "1", 0);
        moving(9, 9, "B", "B", 0);
        moving(10, 11, "0", "Z", 1);
        moving(10, 10, "Z", "Z", 0);
        moving(10, 16, "B", "B", 1);
        moving(11, 12, "1", "1", 1);
        moving(11, 11, "Z", "Z", 1);
        moving(12, 12, "0", "0", 1);
        moving(12, 13, "C", "C", 1);
        moving(12, 12, "B", "B", 1);
        moving(13, 13, "0", "0", 1);
        moving(13, 14, "B", "0", 0);
        moving(14, 14, "0", "0", 0);
        moving(14, 15, "C", "C", 0);
        moving(15, 15, "0", "0", 0);
        moving(15, 10, "1", "1", 0);
        moving(15, 15, "B", "B", 0);
        moving(16, 17, "1", "1", 0);
        moving(16, 16, "Z", "0", 1);
        moving(17, 18, "0", "Z", 1);
        moving(18, 19, "1", "1", 1);
        moving(19, 20, "0", "B", 0);
        moving(19, 32, "C", "C", 0);
        moving(19, 19, "B", "B", 1);
        moving(20, 20, "0", "0", 0);
        moving(20, 21, "1", "1", 0);
        moving(20, 20, "B", "B", 0);
        moving(21, 22, "0", "Z", 1);
        moving(21, 21, "Z", "Z", 0);
        moving(21, 28, "B", "B", 1);
        moving(22, 23, "1", "1", 1);
        moving(22, 22, "Z", "Z", 1);
        moving(23, 23, "0", "0", 1);
        moving(23, 24, "C", "C", 1);
        moving(23, 23, "B", "B", 1);
        moving(24, 24, "0", "0", 1);
        moving(24, 24, "Z", "Z", 1);
        moving(24, 25, "B", "B", 0);
        moving(25, 26, "0", "Z", 1);
        moving(25, 20, "C", "C", 0);
        moving(25, 25, "Z", "Z", 0);
        moving(26, 26, "0", "0", 1);
        moving(26, 26, "Z", "Z", 1);
        moving(26, 27, "B", "0", 0);
        moving(27, 27, "0", "0", 0);
        moving(27, 25, "Z", "Z", 0);
        moving(28, 29, "1", "1", 1);
        moving(28, 28, "Z", "0", 1);
        moving(29, 29, "0", "0", 1);
        moving(29, 30, "C", "C", 1);
        moving(29, 29, "B", "B", 1);
        moving(30, 30, "0", "0", 0);
        moving(30, 31, "C", "C", 0);
        moving(30, 30, "Z", "0", 1);
        moving(31, 31, "0", "0", 0);
        moving(31, 17, "1", "1", 0);
        moving(31, 31, "B", "B", 0);
        moving(32, 33, "1", "B", 0);
        moving(32, 32, "B", "B", 0);
        moving(33, 34, "Z", "B", 0);
        moving(34, 34, "0", "B", 0);
        moving(34, 35, "C", "C", 1);
        moving(34, 34, "B", "B", 1);
        moving(35, 35, "0", "0", 1);
        moving(35, 36, "B", "B", 1);

        // STATE 36 (FINAL STATE)
        if (state == 36) {
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