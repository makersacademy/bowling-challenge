'use strict';

function Game(shot) {
    this.LAST_FRAME = 10;
    
    this._shot = typeof shot !== 'undefined' ? shot : new Shot();
    this._score = new Score;
    this.frames = [];
    this._resetFrame();
}
// TODO Refactor this monstrosity 
Game.prototype.throwBall = function() {
    if(this._isLastFrame()) { return this.finalFrame() }
    if(this.currentFrame().throws < 1) {
        this._bowl();
        if(this._isStrike()) {
            this._resetFrame();
            return this.showScore();
        }
        return this.showScore();
    }
    else {
        this._bowl();
        this._resetFrame();
        return this.showScore();
    }
};
Game.prototype.showScore = function() {
    return this._score.calculateScore(this.frames);
};

Game.prototype.currentFrame = function() {
    return this.frames[this.frames.length - 1];
};

// TODO Refactor this monstrosity 
Game.prototype.finalFrame = function() {
    this._bowl();
    if((this._isStrike()) && (this.currentFrame().throws.length < 3)) {
        this.currentFrame().resetPins();
        return this.showScore();
    }
    else if((this.currentFrame().throws.length === 2) && this._isStrike()) {
        this.currentFrame().resetPins();
        return this.showScore();
    }
    else if(this.currentFrame().throws.length < 2) {
        return this.showScore();
    }
    else {
        return this._resetGame();
    }
};

Game.prototype._resetFrame = function() {
    var frame = new Frame;
    this.frames.push(frame);
};

Game.prototype._bowl = function() {
    this.currentFrame().knockDownPins(this._shot.bowl(this.currentFrame().pinsStanding()));
};

Game.prototype._isStrike = function() {
    return this.currentFrame().pinsStanding() === 0;
};

Game.prototype._isLastFrame = function() {
    return this.frames.length === this.LAST_FRAME;
};

Game.prototype._resetGame = function() {
    var finalScore = "Gamover, your final score is: " + this.showScore();
    this.frames = [];
    this._resetFrame();
    return finalScore;
};
