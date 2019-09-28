'use strict';

function BowlingGame() {
    this.scoreCard = [];
}

BowlingGame.prototype.bowl = function (pins) {
    this.scoreCard.push(pins);
};