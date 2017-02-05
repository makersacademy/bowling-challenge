'use strict';

function Frame() {
    // this._pinRack = [1,
    //                 1,1,
    //                1,1,1,
    //               1,1,1,1]

    this._PINS = 10;
    // this._pinsStanding = 10;
    this._scores = [];
    // this._scorecard = [];
    // this._frameScore = 0;
    this._currentTurn = 0;
    this._turnsRemaining = 2;
}

// Frame.prototype.pins = function() {
//     for (var i = 0; i < this._pinRack.length; i++) {
//         this._pinsStanding += this._pinRack[i]
//     }
//     return this._pinsStanding;
// }

Frame.prototype.turn = function(pins) {
    // this._pinsStanding -= pins;
    this._currentTurn++;
    this._turnsRemaining--;
    this._scores.push(pins);
    // console.log(this.score());
    // this.scoreCalculator(pins);
    // if (this._currentTurn >= 2 || this.isStrike()) {
    //     game.endFrame(this.scoreCalculator(pins));
    // }
    // console.log(this._absoluteScore);
    // console.log(this._score);
};
//
// Frame.prototype.scoreCalculator = function(pins) {
//     if (this.isStrike()) {
//         this._scorecard.push('X');
//         this._scores.push(10);
//     } else if (this.isSpare()) {
//         this._scorecard.push('/')
//         this._scores.push(pins);
//     } else {
//         this._scorecard.push(pins)
//         .push(pins);
//     }
//     return [this.frameScore(), this._scores, this._scorecard];
// };
//
// Frame.prototype.frameScore = function() {
//     return this._scores.reduce(absScore);
// }

Frame.prototype.isStrike = function() {
    return this._scores[0] === this._PINS
    // return this._pinsStanding === 0 && this._currentTurn === 1
}

Frame.prototype.isSpare = function() {
    return !this.isStrike() && this.score() === this._PINS
    // return this._pinsStanding === 0 && this._currentTurn === 2
}

Frame.prototype.score = function() {
    return this._scores.reduce(absScore);
}

function absScore(total, num) {
    return total + num;
}

Frame.prototype.isEnded = function() {
    return this._turnsRemaining === 0 || this.isStrike();
}
