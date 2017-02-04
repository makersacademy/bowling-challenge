'use strict';

// var Shot = require('shot');

function Game(shot) {
    this._shot = typeof shot !== 'undefined' ? shot : new Shot();
    
}

Game.prototype.throwBall = function() {
    return this._shot.bowl();
};