'use strict';

function Frame() {
    // this._pinRack = [1,
    //                 1,1,
    //                1,1,1,
    //               1,1,1,1]

    this._pinsStanding = 10;
    this._score = [];
    this._currentTurn = 0;

}

// Frame.prototype.pins = function() {
//     for (var i = 0; i < this._pinRack.length; i++) {
//         this._pinsStanding += this._pinRack[i]
//     }
//     return this._pinsStanding;
// }

Frame.prototype.turn = function(game, pins) {
    this._pinsStanding -= pins;
    this._currentTurn += 1
    this.scoreCalculator(pins);
    if (this._currentTurn >= 2 || this.isStrike()) {
        game.endFrame(this._score);
    }
};

Frame.prototype.scoreCalculator = function(pins) {
    if (this.isStrike()) {
        this._score.push(pins, 0, 'X')
    }
    this.isSpare() ? this._score.push(pins, '/') : this._score.push(pins)
};

Frame.prototype.isStrike = function() {
    return (this._pinsStanding === 0 && this._currentTurn === 1) ? true : false;
}

Frame.prototype.isSpare = function() {
    return (this._pinsStanding === 0 && this._currentTurn === 2) ? true : false;
}
