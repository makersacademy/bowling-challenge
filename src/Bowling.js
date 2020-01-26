"use strict";

function Bowling() {
    this.score = 0;
    this.scores = [];
    this.totalScores = [];
}

Bowling.prototype.getScore = function() {
    return this.score;
};

Bowling.prototype.randScore = function(number = null) {
    if (number === null) {
        this.score = Math.floor(Math.random(10) * 11);
    } //times 11 to get 10 pins
    else {
        this.score = number;
    }
    return this.scores.push(this.score);
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