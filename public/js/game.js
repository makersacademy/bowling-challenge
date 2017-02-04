'use strict';

// var Shot = require('shot');

function Game() {
    
}

Game.prototype.throwBall = function() {
    var shot = new Shot();
    return shot.bowl();
};