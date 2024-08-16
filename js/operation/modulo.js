function modulo() {
    if (blocks[0]) {
        const activeBlock = document.getElementsByClassName("active");
        for (let i = 0; i < activeBlock.length; i++) {
            activeBlock[i].className = activeBlock[i].className.replace(
                "active",
                ""
            );
        }

        done = 0;

        moving(0, 1, "0", "0", 1);
        moving(1, 1, "0", "0", 1);
        moving(1, 1, "C", "C", 1);
        moving(1, 2, "B", "C", 0, 1);
        moving(2, 2, "0", "0", 0);
        moving(2, 3, "C", "C", 0);
        moving(3, 3, "X", "X", 0);
        moving(3, 3, "C", "C", 0);
        moving(3, 4, "0", "X", 1);
        moving(3, 12, "B", "B", 1);
        moving(4, 4, "X", "X", 1);
        moving(4, 5, "C", "C", 1);
        moving(5, 5, "Y", "Y", 1);
        moving(5, 5, "C", "C", 1);
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
        moving(10, 11, "C", "C", 0);
        moving(11, 11, "C", "C", 0);
        moving(11, 11, "X", "C", 0);
        moving(11, 4, "0", "X", 1);
        moving(11, 12, "B", "B", 1);
        moving(12, 12, "X", "X", 1);
        moving(12, 13, "C", "C", 1);
        moving(13, 13, "C", "C", 1);
        moving(13, 14, "Y", "Y", 1);
        moving(13, 14, "0", "0", 1);
        moving(14, 14, "Y", "Y", 1);
        moving(14, 14, "0", "0", 1);
        moving(14, 15, "C", "C", 1);
        moving(15, 16, "B", "B", 0);
        moving(15, 20, "0", "0", 1);
        moving(16, 17, "C", "B", 0);
        moving(17, 17, "0", "B", 0);
        moving(17, 17, "Y", "B", 0);
        moving(17, 18, "C", "B", 0);
        moving(18, 18, "C", "B", 0);
        moving(18, 18, "X", "0", 0);
        moving(18, 19, "B", "B", 1);
        moving(20, 20, "0", "0", 1);
        moving(20, 21, "B", "B", 0);
        moving(21, 21, "0", "B", 0);
        moving(21, 17, "C", "B", 0);

        // STATE 19 (FINAL STATE)
        if (state == 19) {
            // Done!
            halt();
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
