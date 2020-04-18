'use strict';

function Scorecard() {
    this.gamescore = 0
    this.rollnumber = 1
}

Scorecard.prototype.getCurrentScore = function() {
    return this.gamescore
}

Scorecard.prototype.rollscore = function(score) {
    return (this.gamescore + score);
}
