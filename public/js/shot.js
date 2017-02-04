'use strict';

function Shot() {
    
}

Shot.prototype._randomNumber = function() {
    return Math.floor(Math.random() * 10);
};

Shot.prototype.bowl = function() {
    return this._randomNumber();
};