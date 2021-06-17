function modMove() {
    // *******************************
    //            MODULO
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
        
        moving(0, 1, "0", "0", 1);
        moving(1, 1, "0", "0", 1);
        moving(1, 1, "C", "C", 1);
        moving(1, 2, "B", "C", 0, 1);
        moving(2, 2, "0", "0", 0);
        moving(2, 3, "C", "C", 0);
        moving(3, 3, "X", "X", 0);
        moving(3, 4, "0", "X", 1);
        moving(3, 11, "B", "B", 1);
        moving(4, 4, "X", "X", 1);
        moving(4, 5, "C", "C", 1);
        moving(5, 5, "Y", "Y", 1);
        moving(5, 6, "0", "Y", 1);
        moving(6, 7, "0", "0", 0);
        moving(6, 8, "C", "C", 1);
        moving(7, 7, "Y", "Y", 0);
        moving(7, 3, "C", "C", 0);
        moving(8, 8, "0", "0", 1);
        moving(8, 9, "B", "0", 0, 1);
        moving(9, 9, "0", "0", 0);
        moving(9, 10, "C", "C", 0);
        moving(10, 10, "Y", "0", 0);
        moving(10, 3, "C", "C", 0);
        moving(11, 11, "X", "X", 1);
        moving(11, 12, "C", "C", 1);
        moving(12, 12, "Y", "Y", 1);
        moving(12, 12, "0", "0", 1);
        moving(12, 13, "C", "C", 1);
        moving(13, 14, "B", "B", 0);
        moving(13, 18, "0", "0", 1);
        moving(14, 15, "C", "C", 0);;
        moving(15, 15, "Y", "B", 0);
        moving(15, 15, "0", "B", 0);
        moving(15, 16, "C", "B", 0);
        moving(16, 16, "X", "0", 0);
        moving(16, 17, "B", "B", 1);
        moving(18, 18, "0", "0", 1);
        moving(18, 19, "B", "B", 0);
        moving(19, 19, "0", "B", 0);
        moving(19, 20, "C", "B", 0);
        moving(20, 20, "0", "0", 0);
        moving(20, 20, "Y", "B", 0);
        moving(20, 21, "C", "B", 0);
        moving(21, 21, "X", "B", 0);
        moving(21, 17, "B", "B", 1);

        // STATE 17 (FINAL STATE)
        if (state == 17) {
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