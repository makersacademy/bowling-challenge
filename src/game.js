'use strict';

function Game() {
    this._currentFrame = 1
    this._frame = new Frame();
    this._scorecard = [];
    this._score = 0;
}

Game.prototype.nextFrame = function() {
    this._currentFrame += 1;
    if(!this.isEnded()) {
        this._frame = new Frame();
    }
};

Game.prototype.bowl = function(pins) {
    if(this.isEnded()) { throw new Error("The game has ended") }
    this._frame.turn(this, pins);
};

Game.prototype.endFrame = function(scores) {
    this.scorecard(scores);
    this._scorecard.push(scores);
    this.nextFrame();
};

Game.prototype.scorecard = function(scores) {
    this._score += (scores[0] + scores[1]);
}

Game.prototype.scoreboard = function() {
    var output = "";
    for(var i = 0; i <= (this._currentFrame - 1); i++) {
        output += "Frame " + (i + 1) + ": " + this._scorecard[i] + "\n ";
    }
    return output;
};

Game.prototype.isEnded = function() {
    if(this._currentFrame > 10) { return true; }
}





// pins = 10
// frames = 10
// bowls = 1 || 2 per frames
