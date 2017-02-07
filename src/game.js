'use strict';

function Game() {
    this._frames = [];
    this._currentFrame = 0;
    this._frame = new Frame();
    this._score = 0;
}

Game.prototype.bowl = function(pins) {
    this._frame.turn(pins);
    this.endFrame();
};

Game.prototype.nextFrame = function() {
    this._currentFrame++;
    this._frame = new Frame();
};

Game.prototype.endFrame = function(scores) {
    if (this._frame.isEnded()) {
        this._frames.push(this._frame);
        this.nextFrame();
    }
};

Game.prototype.score = function() {
    var self = this;
    return this._frames.reduce(function(total, frame, num, frames) {
        var bonus = 0;
        bonus += self.spareCheck(frame, frames[num + 1]);
        bonus += self.strikeCheck(frame, num, frames[num + 1], frames[num + 2]);
        return total + bonus + frame.score();
    }, 0);
};

Game.prototype.strikeCheck = function(frame, num, framePlus1, framePlus2) {
    if (frame.isStrike() && num < 9 && framePlus1 && framePlus2) {
        return this.strikeBonus(frame, framePlus1, framePlus2);
    } else {
        return 0;
    }
}

Game.prototype.spareCheck = function(frame, framePlus1) {
    if (frame.isSpare() && framePlus1) {
        return this.spareBonus(frame, framePlus1);
    } else {
        return 0;
    }
}

Game.prototype.strikeBonus = function(frame, framePlus1, framePlus2) {
    var strikeBonus = 0;
    if (framePlus1.isStrike()) {
        strikeBonus = framePlus1.score() + framePlus2._scores[0];
    } else {
        strikeBonus = framePlus1.score();
    }
    return strikeBonus;
}

Game.prototype.spareBonus = function(frame, framePlus1) {
    return framePlus1._scores[0];
}
