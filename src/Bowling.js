"use strict";

function Bowling() {
    this.score = 0;
}

Bowling.prototype.getScore = function() {
    return this.score;
};

Bowling.prototype.randScore = function() {
    return (this.score = Math.floor(Math.random(10) * 11)); //times 11 to get 10 pins
};