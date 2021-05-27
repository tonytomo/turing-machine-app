// Komponen Ops
function Blockops(content) {
    this.content = content;
    
    // Make div
    var rect = document.createElement("p");
    var text = document.createTextNode(this.content);

    rect.appendChild(text);

    var tm = document.getElementById("opsTm");
    tm.appendChild(rect);

    // Change content
    this.changeTo = function (otherContent) {
        this.content = otherContent;
    }
}

// Komponen Factorial
function Blockfact(content) {
    this.content = content;
    
    // Make div
    var rect = document.createElement("p");
    var text = document.createTextNode(this.content);

    rect.appendChild(text);

    var tm = document.getElementById("factTm");
    tm.appendChild(rect);

    // Change content
    this.changeTo = function (otherContent) {
        this.content = otherContent;
    }
}

// Komponen Logaritma
function Blocklog(content) {
    this.content = content;
    
    // Make div
    var rect = document.createElement("p");
    var text = document.createTextNode(this.content);

    rect.appendChild(text);

    var tm = document.getElementById("logTm");
    tm.appendChild(rect);

    // Change content
    this.changeTo = function (otherContent) {
        this.content = otherContent;
    }
}