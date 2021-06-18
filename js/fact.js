var nf = document.getElementById('nf'); // Factorial

var i; // iteration for loop
var crAct; // Current active block
var it; // Moves iteration, ++ kekanan, -- kekiri
var state; // State

var looper; // Auto moves
var done; // Flag done
var f = []; // Factorial

// List untuk turing machine
var factLine = [];
// Turing machine
var factTmLine = document.getElementById('factTm');

// Selector controller
const factcontrol = document.querySelectorAll('.factcontrol');

// After click = button
function doFact() {
  // Write here...
  //factLine.push(new Blockfact("C"));

  //jika input field terisi
  if (nf.value) {
    // Write here...
    doFactClear();
    //factLine.push(new Blockfact("C"));
    // Enable control
    enableFact(0);
    enableFact(2);
    enableFact(3);

    // Disable control
    disableFact(1);

    factLine.push(new Blockfact('B'));
    factLine.push(new Blockfact('B'));
    factTmLine.childNodes[1].className += ' active';
    it = 2;
    state = 0;

    for (i = 0; i < nf.value; i++) {
      factLine.push(new Blockfact('1'));
    }

    // Limiter
    factLine.push(new Blockfact('!'));
    factLine.push(new Blockfact('='));

    factLine.push(new Blockfact('B'));
    factLine.push(new Blockfact('B'));
  }
}

// Auto move
function doFactAuto() {
  // Write here...

  // Enable control
  enableFact(1);

  // Disable control
  disableFact(0);
  disableFact(2);
  disableFact(3);

  looper = setInterval(doFactNext, 400);
}

// Stop auto moves
function stopFactAuto() {
  // Enable control
  enableFact(0);
  enableFact(2);
  enableFact(3);

  // Disable control
  disableFact(1);

  // Clear interval
  clearInterval(looper);
}

// Next move
function doFactNext() {
  // *******************************
  //            FAKTORIAL
  //      Tempat untuk tiap state
  // *******************************
  // Tulis dibawah ini...
  // Jika TM sudah terisi
  if (factLine[0]) {
    // Deactivate block
    crAct = document.getElementsByClassName('active');
    for (i = 0; i < crAct.length; i++) {
      crAct[i].className = crAct[i].className.replace(' active', '');
    }

    done = 0;

    moving(0, 1, '1', 'X', 1);
    moving(0, 18, '0', '0', 1);
    moving(0, 3, '!', '!', 1);
    moving(1, 1, '1', '1', 1);
    moving(1, 1, '!', '!', 1);
    moving(1, 1, '=', '=', 1);
    moving(1, 2, 'B', '1', 1, 1);
    moving(2, 2, '1', '1', 0);
    moving(2, 2, '!', '!', 0);
    moving(2, 2, '=', '=', 0);
    moving(2, 0, 'X', 'X', 1);
    moving(3, 3, '1', '1', 1);
    moving(3, 3, '!', '!', 1);
    moving(3, 3, '=', '=', 1);
    moving(3, 4, 'B', '*', 0);
    moving(4, 4, '1', '1', 0);
    moving(4, 4, '!', '!', 0);
    moving(4, 4, '=', '=', 0);
    moving(4, 4, 'X', 'X', 0);
    moving(4, 6, 'Z', 'Z', 1);
    moving(4, 5, 'B', 'B', 0);
    moving(5, 12, 'X', 'Y', 1);
    moving(6, 13, '!', '!', 1);
    moving(6, 7, 'X', 'Z', 1);
    moving(7, 7, '1', '1', 1);
    moving(7, 7, 'X', 'X', 1);
    moving(7, 8, '!', '!', 1);
    moving(8, 8, '=', '=', 1);
    moving(8, 9, '1', 'X', 1);
    moving(8, 11, '*', '*', 0);
    moving(9, 9, '1', '1', 1);
    moving(9, 9, '*', '*', 1);
    moving(9, 10, 'B', '1', 0, 1);
    moving(10, 10, '1', '1', 0);
    moving(10, 10, '*', '*', 0);
    moving(10, 8, 'X', 'X', 1);
    moving(10, 10, '1', '1', 0);
    moving(11, 11, 'X', '1', 0);
    moving(11, 4, '=', '=', 0);
    moving(12, 15, '!', '!', 1);
    moving(12, 6, 'X', 'Y', 1);
    moving(13, 13, '1', '1', 1);
    moving(13, 13, '=', '=', 1);
    moving(13, 13, '*', '*', 1);
    moving(13, 18, 'B', 'B', 1);
    moving(14, 14, '1', '1', 0);
    moving(14, 14, '!', '!', 0);
    moving(14, 14, '=', '=', 0);
    moving(14, 14, 'Z', 'Z', 0);
    moving(14, 15, 'Y', 'Y', 1);
    moving(15, 15, '1', '1', 1);
    moving(15, 15, '!', '!', 1);
    moving(15, 15, '=', '=', 1);
    moving(15, 15, 'X', 'X', 1);
    moving(15, 16, 'B', '*', 0, 1);
    moving(15, 19, '*', 'B', 1);
    moving(16, 16, '1', '1', 0);
    moving(16, 16, '!', '!', 0);
    moving(16, 16, '=', '=', 0);
    moving(16, 16, 'X', 'X', 0);
    moving(16, 17, 'Y', 'Y', 1);
    moving(17, 15, '!', '!', 1);
    moving(17, 6, 'X', 'Y', 1);
    moving(18, 18, '!', '!', 1);
    moving(18, 18, '=', '=', 1);
    moving(18, 19, 'B', '1', 0, 1);

    // STATE 19 (FINAL STATE)
    if (state == 19) {
      // Selesai
      stopFactAuto();
      factTmLine.childNodes[it].scrollIntoView(false);

      // Enable control
      enableFact(2);

      // Disable control
      disableFact(0);
      disableFact(1);
      disableFact(3);

      // Show answer in decimal
      showFactAns();
    }
  }
}

// Clear TM
function doFactClear() {
  // Write here...
  // Declare list to null and factLine to null
  factTmLine.innerHTML = '';
  factLine = [];

  // Change ans field
  var ansField = document.getElementById('factAns');
  ansField.textContent = 0;
}

// Show answer
function showFactAns() {
  // Write here...
  var ans = 0; // Jawaban

  // ans faktorial
  ans = factorial(nf.value);

  // Show answer on ans field
  var ansField = document.getElementById('factAns');
  ansField.textContent = ans;
}

// Faktorial
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  if (f[n] > 0) return f[n];
  return (f[n] = factorial(n - 1) * n);
}

// Enable controller
function enableFact(index) {
  factcontrol[index].disabled = false;
}

// Disable controller
function disableFact(index) {
  factcontrol[index].disabled = true;
}
