'use strict';

function Game() {
    this.totalScore = 0;
}

Game.prototype.totalScore = function() {
    return this.totalScore;
};

Game.prototype.updateTotalScore = function(subtotal) {
    this.totalScore += subtotal;
};