'use strict';

function Shot() {
    
}

Shot.prototype._randomNumber = function(max) {
    return Math.floor(Math.random() * max);
};

Shot.prototype.bowl = function(pinsStanding) {
    return this._randomNumber(pinsStanding);
};