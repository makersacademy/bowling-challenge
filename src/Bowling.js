"use strict";

function Bowling(pins = new Pins()) {
    this.pins = pins;
    this.scores = [];
    this.totalScores = [];
    this.frame = 0;
    this.roll = 0;
}


Bowling.prototype.possiblePins = function(number = null) {
    return this.scores.push(this.pins.knockDownPins(number));
};

Bowling.prototype.getAllScores = function() {
    return this.scores;
};

Bowling.prototype.getScoresTotalEvery2Elements = function() {
    for (var i = 0; i < this.scores.length; i += 2) {
        var myChunk = this.scores.slice(i, i + 2);
        this.totalScores.push(this._sum(myChunk));
    }
    return this.totalScores;
    // return this.scores.reduce((a, b) => a + b, 0);
};

Bowling.prototype._sum = function(array) {
    var total = 0;
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength; i++) {
        total += array[i];
    }
    return total;
};