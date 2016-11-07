"use strict";

function Frame() {
    this._DEFAULT_PINS = 10;
    this._currentPins = this._DEFAULT_PINS;
};

Frame.prototype.totPins = function() {
	return this._currentPins;
};