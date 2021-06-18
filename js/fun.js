// Fungsi untuk menyederhanakan
function moving(fromState, toState, oldContent, newContent, arah, adding) 
{
    if (state == fromState && opsLine[it].content == oldContent && done == 0) {
        // Change textContent
        opsLine[it].changeTo(newContent);
        opsTmLine.childNodes[it].textContent = newContent;

        // Activate block
        opsTmLine.childNodes[it].className += " active";
        opsTmLine.childNodes[it].scrollIntoView();

        // Tambah notif
        var arahke = (arah == 1) ? "R": "L";
        addNotif(state + " | " + oldContent + ", " + newContent + " / " + arahke);
        
        // Change state
        state = toState;

        if (adding) {
            // Tambah blank block
            opsLine.push(new Blockops("B"));
        }

        if (arah == 1) {
            // Ke kanan
            it++;
        } else {
            // Kekiri
            it--;
        }

        // Flag if done
        done = 1;
    }
}
// Faktorial
function movingf(fromState, toState, oldContent, newContent, arah, adding) 
{
    if (state == fromState && factLine[it].content == oldContent && done == 0) {
        // Change textContent
        factLine[it].changeTo(newContent);
        factTmLine.childNodes[it].textContent = newContent;

        // Activate block
        factTmLine.childNodes[it].className += " active";
        factTmLine.childNodes[it].scrollIntoView();

        // Tambah notif
        var arahke = (arah == 1) ? "R": "L";
        addNotif(state + " | " + oldContent + ", " + newContent + " / " + arahke);
        
        // Change state
        state = toState;

        if (adding) {
            // Tambah blank block
            factLine.push(new Blockfact("B"));
        }

        if (arah == 1) {
            // Ke kanan
            it++;
        } else {
            // Kekiri
            it--;
        }

        // Flag if done
        done = 1;
    }
}
// Logaritma biner
function movingl(fromState, toState, oldContent, newContent, arah, adding) 
{
    if (state == fromState && logLine[it].content == oldContent && done == 0) {
        // Change textContent
        logLine[it].changeTo(newContent);
        logTmLine.childNodes[it].textContent = newContent;

        // Activate block
        logTmLine.childNodes[it].className += " active";
        logTmLine.childNodes[it].scrollIntoView();

        // Tambah notif
        var arahke = (arah == 1) ? "R": "L";
        addNotif(state + " | " + oldContent + ", " + newContent + " / " + arahke);

        // Change state
        state = toState;

        if (adding) {
            // Tambah blank block
            logLine.push(new Blocklog("B"));
        }

        if (arah == 1) {
            // Ke kanan
            it++;
        } else {
            // Kekiri
            it--;
        }

        // Flag if done
        done = 1;
    }
}