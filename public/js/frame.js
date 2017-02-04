'use strict';

function Frame () {
    this._pins = 10;
}

Frame.prototype.pinsStanding = function() {
    return this._pins;
};

Frame.prototype.knockDownPins = function(number) {
    this._pins -= number;
};