'use strict';

function Frame () {
    this._pins = 10;
    this.throws = [];
}

Frame.prototype.pinsStanding = function() {
    return this._pins;
};

Frame.prototype.knockDownPins = function(number) {
    this._pins -= number;
    this.throws.push(number);
};