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