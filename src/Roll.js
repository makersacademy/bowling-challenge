'use strict';

function Roll() {
}

Roll.prototype.randomInt = function(remainder) {
    var max = Math.floor(remainder);
    return Math.floor(Math.random() * (max + 1));
};

Roll.prototype.score = function(remainder) {
	return this.randomInt(remainder);
};