'use strict';

// var Shot = require('shot');

function Game(shot) {
    this._shot = typeof shot !== 'undefined' ? shot : new Shot();
    var frame = new Frame
    this.frames = [];
    this.frames.push(frame);
    this._frame = this.currentFrame();
}

Game.prototype.throwBall = function() {
    this._frame.knockDownPins(this._shot.bowl());
};

Game.prototype.currentFrame = function () {
    return this.frames[this.frames.length - 1];
};

