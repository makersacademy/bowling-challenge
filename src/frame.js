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
    this.scoreCalculator(pins);
    if((this._currentTurn += 1) > 1 || pins === 10 ) { game.endFrame(this._score); }
};

Frame.prototype.scoreCalculator = function(pins) {
    if(pins === 10) { pins = 'X' }
        else if(this._score[0] + pins === 10) { pins = '/' }
    this._score.push(pins);
};
