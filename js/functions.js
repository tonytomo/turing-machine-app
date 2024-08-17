// Fungsi untuk menyederhanakan
function moving(
    fromState = 0,
    toState = 0,
    oldContent = "0",
    newContent = "0",
    direction = 0,
    adding = 0
) {
    if (state == fromState && blocks[moveDirection].content == oldContent && done == 0) {
        // Change textContent
        blocks[moveDirection].changeTo(newContent);
        visualBox.childNodes[moveDirection].textContent = newContent;

        // Activate block
        visualBox.childNodes[moveDirection].className += " active";
        visualBox.childNodes[moveDirection].scrollIntoView();

        // Add log
        let toDirection = direction == 1 ? "R" : "L";
        if (fromState == toState) {
            addLog(
                state + " | " + oldContent + ", " + newContent + " / " + toDirection
            );
        } else {
            addLog(
                state +
                    " > " +
                    toState +
                    " | " +
                    oldContent +
                    ", " +
                    newContent +
                    " / " +
                    toDirection
            );
        }

        // Change state
        state = toState;

        if (adding) {
            // Tambah blank block
            blocks.push(new Blockops("B"));
        }

        if (direction == 1) {
            // Ke kanan
            moveDirection++;
        } else {
            // Kekiri
            moveDirection--;
        }

        // Flag if done
        done = 1;
    }
}
// Faktorial
function movingf(fromState, toState, oldContent, newContent, direction, adding) {
    if (state == fromState && blocks[moveDirection].content == oldContent && done == 0) {
        // Change textContent
        blocks[moveDirection].changeTo(newContent);
        visualBox.childNodes[moveDirection].textContent = newContent;

        // Activate block
        visualBox.childNodes[moveDirection].className += " active";
        visualBox.childNodes[moveDirection].scrollIntoView();

        // Tambah notif
        var toDirection = direction == 1 ? "R" : "L";
        if (fromState == toState) {
            addLog(
                state + " | " + oldContent + ", " + newContent + " / " + toDirection
            );
        } else {
            addLog(
                state +
                    " > " +
                    toState +
                    " | " +
                    oldContent +
                    ", " +
                    newContent +
                    " / " +
                    toDirection
            );
        }

        // Change state
        state = toState;

        if (adding) {
            // Tambah blank block
            blocks.push(new Blockfact("B"));
        }

        if (direction == 1) {
            // Ke kanan
            moveDirection++;
        } else {
            // Kekiri
            moveDirection--;
        }

        // Flag if done
        done = 1;
    }
}
// Logaritma biner
function movingl(fromState, toState, oldContent, newContent, direction, adding) {
    if (state == fromState && blocks[moveDirection].content == oldContent && done == 0) {
        // Change textContent
        blocks[moveDirection].changeTo(newContent);
        visualBox.childNodes[moveDirection].textContent = newContent;

        // Activate block
        visualBox.childNodes[moveDirection].className += " active";
        visualBox.childNodes[moveDirection].scrollIntoView();

        // Tambah notif
        var toDirection = direction == 1 ? "R" : "L";
        if (fromState == toState) {
            addLog(
                state + " | " + oldContent + ", " + newContent + " / " + toDirection
            );
        } else {
            addLog(
                state +
                    " > " +
                    toState +
                    " | " +
                    oldContent +
                    ", " +
                    newContent +
                    " / " +
                    toDirection
            );
        }

        // Change state
        state = toState;

        if (adding) {
            // Tambah blank block
            blocks.push(new Blocklog("B"));
        }

        if (direction == 1) {
            // Ke kanan
            moveDirection++;
        } else {
            // Kekiri
            moveDirection--;
        }

        // Flag if done
        done = 1;
    }
}
