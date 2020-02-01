'use strict'

function Pins() {
    this.score = 0;
}

Pins.prototype.knockDownPins = function(number = null) {
    if (number === null) {
        return this.score = Math.floor(Math.random(10) * 11);
    } //times 11 to get 10 pins
    else {
        return this.score = number;
    }
}