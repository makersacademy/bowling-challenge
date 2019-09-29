'use strict';

function BowlingGame() {
    this.scoreCard = [];
}

BowlingGame.prototype.frame = function(bowl1, bowl2, bowl3) {
    let frameScore = [];

    let bowl = function(pins) {
        frameScore.push(pins)
    };

    bowl(bowl1);
    bowl(bowl2);

    if (this.scoreCard.length === 9)
        bowl(bowl3);

    this.scoreCard.push(frameScore)
};
