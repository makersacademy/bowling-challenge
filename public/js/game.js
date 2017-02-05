'use strict';

// var Shot = require('shot');

function Game(shot) {
    this._shot = typeof shot !== 'undefined' ? shot : new Shot();
    this._frame = new Frame
    this._score = new Score
    this.frames = [];
    this.frames.push(this._frame);
    // this._throws = 0;
    
}

Game.prototype.throwBall = function() {
    if(this.currentFrame().throws < 1) {
        this._bowl();
        if(this.isStrike()) {
            this._resetFrame();
        }
    }
    else {
        this._bowl();
        this._resetFrame();
    }
};

Game.prototype.currentFrame = function() {
    return this.frames[this.frames.length - 1];
};

Game.prototype._resetFrame = function() {
    var frame = new Frame
    this.frames.push(frame);
    // this._throws = 0;
};

Game.prototype._bowl = function() {
    this.currentFrame().knockDownPins(this._shot.bowl(this.currentFrame().pinsStanding()));
    // this._throws += 1;
};

Game.prototype.isStrike = function() {
    return this.currentFrame().pinsStanding() === 0;
};

Game.prototype.showScore = function() {
    return this._score.calculateScore(this.frames);
};



