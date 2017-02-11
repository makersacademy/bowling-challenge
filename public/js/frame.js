'use strict';

function Frame () {
    this.FRAME_PINS = 10
    this._pins = this.FRAME_PINS;
    this.throws = [];
}

Frame.prototype.pinsStanding = function() {
    return this._pins;
};

Frame.prototype.knockDownPins = function(number) {
    this._pins -= number;
    this.throws.push(number);
};

Frame.prototype.resetPins = function() {
    this._pins = this.FRAME_PINS;
};