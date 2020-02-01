"use strict";

function Bowling(pins = new Pins()) {
    this.pins = pins;
    this.scores = [];
    this.totalScores = 0;
    this.scoreBoard = [
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null],
        [null, null]
    ];
    this.frame = 0;
    this.roll = 0;
}

Bowling.prototype.possiblePins = function() {
    if (this.roll === 0) { return this.pins.knockDownPins() }
    return this.pins.knockDownPins(10 - this.scoreBoard[this.frame][0]);
};

Bowling.prototype.play = function(knockDownPins = null) {
    if (knockDownPins === null) { this.scoreBoard[this.frame][this.roll] = this.possiblePins() } else { this.scoreBoard[this.frame][this.roll] = knockDownPins };
    if (this.scoreBoard[this.frame][0] === 10) {
        this.scoreBoard[this.frame][1] = null;
        return this.frame += 1
    }
    this.next()
}

Bowling.prototype.next = function() {
    if (this.roll === 0) { this.roll = 1 } else if (this.roll === 1) {
        this.frame += 1;
        this.roll = 0;
    }
}

Bowling.prototype.getEachFrameScores = function() {
    this.scores = this._sum(this.scoreBoard)

}

Bowling.prototype._sum = function(array) {
    var total = 0;
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        total += array[i];
    }
    return total;
};


// Bowling.prototype.getAllScores = function() {
//     return this.scores;
// };

// Bowling.prototype.getScoresTotalEvery2Elements = function() {
//     for (var i = 0; i < this.scores.length; i += 2) {
//         var myChunk = this.scores.slice(i, i + 2);
//         this.totalScores.push(this._sum(myChunk));
//     }
//     return this.totalScores;
//     // return this.scores.reduce((a, b) => a + b, 0);
// };