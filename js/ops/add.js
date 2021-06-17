function addMove() {
    // Jika TM sudah terisi
    if (opsLine[0]) {
        // Deactivate block
        crAct = document.getElementsByClassName("active");
        for (i = 0; i < crAct.length; i++) {
            crAct[i].className = crAct[i].className.replace(" active", "");
        }
        
        done = 0;

        // moving(fromState, toState, oldContent, newContent, arah(1=kanan,0=kiri), adding(1=kalo ngubah B jdi lainnya))
        moving(0, 1, "0", "X", 1);
        moving(0, 5, "C", "B", 1);
        moving(1, 2, "C", "C", 1);
        moving(1, 1, "0", "0", 1);
        moving(2, 3, "B", "0", 0, 1);
        moving(2, 2, "0", "0", 1);
        moving(3, 4, "C", "C", 0);
        moving(3, 3, "0", "0", 0);
        moving(4, 0, "X", "X", 1);
        moving(4, 4, "0", "0", 0);

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