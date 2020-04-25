'use strict'

function Pins() {
    this.score = 0;
}

Pins.prototype.knockDownPins = function(maxPins = 10) {
    return this.score = Math.floor(Math.random() * (maxPins + 1));
}