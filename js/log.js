var nl = document.getElementById('nl'); // Logaritma biner

var i; // iteration for loop
var crAct; // Current active block
var it; // Moves iteration, ++ kekanan, -- kekiri
var state; // State

var looper; // Auto moves
var done; // Flag done

// List untuk turing machine
var logLine = [];
// Turing machine
var logTmLine = document.getElementById('logTm');

// Selector controller
const logcontrol = document.querySelectorAll('.logcontrol');

// After click = button
function doLog() {
  // Write here...
  //logLine.push(new Blocklog('A'));

  if (nl.value) {
    // CLear
    doLogClear();

    // Jika input negatif
    if (nl.value < 0) {
      addNotif("Input tidak boleh negatif!");
    } else {
      // Enable control
      enableLog(0);
      enableLog(2);
      enableLog(3);

      // Disable control
      disableLog(1);
    }

    logLine.push(new Blocklog('B'));
    logLine.push(new Blocklog('B'));
    logTmLine.childNodes[1].className += ' active';
    it = 2;
    state = 0;

    // Ubah log(n) ke unary
    for (i = 0; i < nl.value; i++) {
      logLine.push(new Blocklog('1'));
    }

    logLine.push(new Blocklog('B'));
    logLine.push(new Blocklog('B'));
  }
}

// Auto move
function doLogAuto() {
  // Write here...
  looper = setInterval(doLogNext, 100);
  // Enable control
  enableLog(1);

  // Disable control
  disableLog(0);
  disableLog(2);
  disableLog(3);
}

// Stop auto moves
function stopLogAuto() {
  // Enable control
  enableLog(0);
  enableLog(2);
  enableLog(3);

  // Disable control
  disableLog(1);

  // Clear interval
  clearInterval(looper);
}

// Next move
function doLogNext() {
  // *******************************
  //          LOGARITMA BINER
  //      Tempat untuk tiap state
  // *******************************
  // Tulis dibawah ini...
  if (logLine[0]) {
    // Deactivate block
    crAct = document.getElementsByClassName('active');
    for (i = 0; i < crAct.length; i++) {
      crAct[i].className = crAct[i].className.replace(' active', '');
    }

    done = 0;

    movingl(0, 1, '1', '1', 1);
    movingl(0, 12, 'B', 'B', 1);
    movingl(1, 2, '1', '1', 1);
    movingl(1, 11, 'B', 'B', 0);
    movingl(2, 3, '1', 'C', 1);
    movingl(2, 11, 'B', 'B', 0);
    movingl(3, 3, 'C', 'C', 1);
    movingl(3, 4, '1', 'C', 0);
    movingl(3, 7, 'B', 'B', 0);
    movingl(4, 4, '0', '0', 0);
    movingl(4, 4, '1', '1', 0);
    movingl(4, 4, 'C', 'C', 0);
    movingl(4, 5, 'B', 'B', 1);
    movingl(5, 5, '1', '0', 1);
    movingl(5, 6, '0', '1', 1);
    movingl(5, 6, 'C', '1', 1);
    movingl(6, 6, '0', '0', 1);
    movingl(6, 6, '1', '1', 1);
    movingl(6, 3, 'C', 'C', 1);
    movingl(7, 7, '0', '0', 0);
    movingl(7, 7, '1', '1', 0);
    movingl(7, 7, 'C', 'B', 0);
    movingl(7, 8, 'B', 'B', 1);
    movingl(8, 8, '0', '1', 1);
    movingl(8, 9, '1', '1', 1);
    movingl(9, 9, '0', '1', 1);
    movingl(9, 10, '1', '1', 1);
    movingl(9, 11, 'B', 'B', 0);
    movingl(10, 10, '0', '1', 1);
    movingl(10, 10, '1', '1', 1);
    movingl(10, 12, 'B', 'B', 0);
    movingl(11, 12, '1', 'B', '1');

    // STATE 12 (FINAL STATE)
    if (state == 12) {
      // Selesai
      stopLogAuto();
      logTmLine.childNodes[it].scrollIntoView(false);

      // Enable control
      enableLog(2);

      // Disable control
      disableLog(0);
      disableLog(1);
      disableLog(3);

      // Show answer in decimal
      showLogAns();
    }
  }
}

// Clear TM
function doLogClear() {
  // Write here...
  // Declare list to null and LogLine to null
  logTmLine.innerHTML = '';
  logLine = [];

  // Disable all control
  disableLog(0);
  disableLog(1);
  disableLog(2);
  disableLog(3);

  // Clear interval
  clearInterval(looper);

  // Add notif
  addNotif('-');

  // Change ans field
  var ansField = document.getElementById('logAns');
  ansField.textContent = 0;
}

// Show answer
function showLogAns() {
  // Write here...
  var ans = 0; // Jawaban

  ans = Math.log2(nl.value);

  // Show answer on ans field
  var ansField = document.getElementById('logAns');
  ansField.textContent = ans;
}
// Enable controller
function enableLog(index) {
  logcontrol[index].disabled = false;
}

// Disable controller
function disableLog(index) {
  logcontrol[index].disabled = true;
}

// Tambah notif
function addNotif(pesan) {
  notif.textContent = pesan;
}