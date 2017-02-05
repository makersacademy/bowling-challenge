'use strict';

// var Shot = require('shot');

function Game(shot) {
    this._shot = typeof shot !== 'undefined' ? shot : new Shot();
    this._frame = new Frame
    this.frames = [];
    this.frames.push(this._frame);
    this._throws = 0;
    
}

Game.prototype.throwBall = function() {
    if(this._throws < 1) {
        this.currentFrame().knockDownPins(this._shot.bowl(this.currentFrame().pinsStanding()));
        this._throws += 1;
    }
    else {
        this.currentFrame().knockDownPins(this._shot.bowl(this.currentFrame().pinsStanding()));
        this._resetFrame();
    }
};

Game.prototype.currentFrame = function() {
    return this.frames[this.frames.length - 1];
};

Game.prototype._resetFrame = function() {
    var frame = new Frame
    this.frames.push(frame);
};


