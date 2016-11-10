"use strict";

function Frame() {
    this._DEFAULT_PINS = 10;
    this._NULL_SCORE = null;
    this._currentPins = this._DEFAULT_PINS;
    this._isStrike = false;
    this._score1 = this._NULL_SCORE;
    this._score2 = this._NULL_SCORE;
    this._tot_score = (this._score1 + this._score2);
};

Frame.prototype.totPins = function() {
    return this._currentPins;
};