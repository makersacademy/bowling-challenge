'use strict';

function Game() {
    this._frames = [];
    this._currentFrame = 0;
    this._score = 0;
}

Game.prototype.start = function() {
    this.addFrame(new Frame());
    this._currentFrame++;
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
        total += self.spareCheck(frame, num, frames[num + 1]);
        total += self.strikeCheck(frame, num, frames[num + 1], frames[num + 2]);
        return total + frame.score();
    }, 0);
}

Game.prototype.strikeCheck = function(frame, num, framePlus1, framePlus2) {
    if (frame.isStrike() && num < 9 && framePlus1 && framePlus2) {
      console.log(framePlus1);
      console.log(framePlus2);
        return this.strikeBonus(frame, framePlus1, framePlus2);
    } return 0;
}

Game.prototype.spareCheck = function(frame, num, framePlus1) {
    if (frame.isSpare() && num < 9 && framePlus1) {
      console.log(framePlus1);
        return this.spareBonus(frame, framePlus1);
    } return 0;
}

Game.prototype.strikeBonus = function(frame, framePlus1, framePlus2) {
    if (framePlus1.isStrike()) {
        return framePlus1.score() + framePlus2.score();
    } else {
        return framePlus1.score();
    }
}

Game.prototype.spareBonus = function(frame, framePlus1) {
    return framePlus1.firstScore();
}

Game.prototype.isBonusFrame = function() {
    var final = this._frames[9];
    var finalBall = this.currentFrame().firstScore()
    if ((final.isSpare() || final.isStrike()) && !finalBall) {
        return true;
    }
}

Game.prototype.isGameEnded = function() {
    return this._currentFrame > 10 && !this.isBonusFrame();
}
