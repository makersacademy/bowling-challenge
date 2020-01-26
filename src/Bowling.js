"use strict";

function Bowling() {
    this.score = 0;
    this.scores = [];
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