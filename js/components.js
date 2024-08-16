// Komponen Ops
class Blockops {
    constructor(content = "B") {
        this.content = content;

        // Make div
        var rect = document.createElement("p");
        var text = document.createTextNode(this.content);

        rect.appendChild(text);

        const visualBox = document.getElementById("visualBox");
        visualBox.appendChild(rect);

        // Change content
        this.changeTo = function (otherContent) {
            this.content = otherContent;
        };
    }
}

// Komponen Factorial
class Blockfact {
    constructor(content = "B") {
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
        };
    }
}

// Komponen Logaritma
class Blocklog {
    constructor(content = "B") {
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
        };
    }
}
