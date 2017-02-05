'use strict';

function Game() {
    this._currentFrame = 1;
    this._framesRemaining = 10;
    this._frame = new Frame();
    this._score = 0;
    this._frameScores = [];
    this._scorecard = [];
    this._SPARE_BONUS = 1;
    this._STRIKE_BONUS = 2;

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
    if(this._currentFrame <= 10) {this._score += scores[0];}
    this._frameScores.push(scores[1].join(","));
    this._scorecard.push(scores[2].join(","));
    this.bonusHandler(this._STRIKE_BONUS);
    this.nextFrame();
};

Game.prototype.bonusHandler = function(rolls) {
    var identifier = ["/", 'X'];
    var checker = this._scorecard.length - (rolls + 1);
    if(checker >= 0 && this._scorecard[checker] === identifier[rolls - 1]) {
        for(var i = checker + 1; i <= (checker + rolls); i++) {
            this._score += parseInt(this._frameScores[i])
        }
    }
}

Game.prototype.spareHandler = function() {
    var mon = this._scorecard.length - 3
    if(mon >= 0 && this._scorecard[mon] === '/') {
        this._score += this._frameScores[mon + 1]
    }
}

Game.prototype.isEnded = function() {
    return this._framesRemaining === 0;
}
