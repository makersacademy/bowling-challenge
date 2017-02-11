'use strict';

function Game() {
    this._frames = [];
    this._currentFrame = 0;
    this._score = 0;
}

Game.prototype.start = function() {
    this.addFrame(new Frame());
}

Game.prototype.bowl = function(pins) {
    if (this.isGameEnded()) { return "The game has ended" }
    this.currentFrame().turn(pins);
    this.nextFrame();
}

Game.prototype.currentFrame = function() {
    return this._frames[this._frames.length - 1];
}

Game.prototype.isNextFrame = function() {
    return this.currentFrame().isFrameEnded();
}

Game.prototype.addFrame = function(frame){
    this._frames.push(frame);
}

Game.prototype.nextFrame = function() {
    if (this.currentFrame().isFrameEnded()) {
        this._currentFrame++;
        this.addFrame(new Frame());
    }
}

Game.prototype.score = function() {
    var self = this;
    return this._frames.reduce(function(total, frame, num, frames) {
        total += self.spareCheck(frame, frames[num + 1]);
        total += self.strikeCheck(frame, num, frames[num + 1], frames[num + 2]);
        return total + frame.score();
    }, 0);
}

Game.prototype.strikeCheck = function(frame, num, framePlus1, framePlus2) {
    if (frame.isStrike() && num < 9 && framePlus1 && framePlus2) {
        return this.strikeBonus(frame, framePlus1, framePlus2);
    } return 0;
}

Game.prototype.spareCheck = function(frame, framePlus1) {
    if (frame.isSpare() && framePlus1) {
        return this.spareBonus(frame, framePlus1);
    } return 0;
}

Game.prototype.strikeBonus = function(frame, framePlus1, framePlus2) {
    if (framePlus1.isStrike()) {
        return framePlus1.score() + framePlus2.firstScore();
    } else {
        return framePlus1.score();
    }
}

Game.prototype.spareBonus = function(frame, framePlus1) {
    return framePlus1.firstScore();
}

Game.prototype.isBonusFrame = function() {
    var len = this._frames.length
    for(var i = 9; i < len && len < 13; i++) {
        if (this._frames[i].isSpare() || this._frames[i].isStrike()) {
            return true;
        }
    }
}

Game.prototype.isGameEnded = function() {
    return this._currentFrame > 9 && !this.isBonusFrame();
}
