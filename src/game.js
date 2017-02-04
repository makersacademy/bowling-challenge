'use strict';

function Game() {
    this._currentFrame = 1
    this._frame = new Frame();
    this._scorecard = {};
    this._score = 0;
    this._endTurn = false;
}

Game.prototype.nextFrame = function() {
    this._frame = new Frame();
    return this._currentFrame += 1;
};

Game.prototype.bowl = function(pins) {
    if(this.isEnded()) { throw new Error("The game has ended") }
    this._frame.turn(this, pins);
};

Game.prototype.endFrame = function(scores) {
    this._scorecard["Frame " + this._currentFrame] = scores;
    this.nextFrame();
};

Game.prototype.scorecard = function() {
    if(isNaN(scores[0]) || isNaN(scores[1])) {
        this._score += 10
    } else {
    this._score += (scores[0] + scores[1]);
    }
}

Game.prototype.scoreboard = function() {
    var output = "";
    for(var i = 1; i <= (this._currentFrame - 1); i++) {
        output += "Frame " + i + ": " + this._scorecard["Frame " + i] + "\n ";
    }
    return output;
};

Game.prototype.isEnded = function() {
    if(this._currentFrame > 10) { return true; }
}





// pins = 10
// frames = 10
// bowls = 1 || 2 per frames
