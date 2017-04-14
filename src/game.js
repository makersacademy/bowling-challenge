'use strict';

function Game(){}

Game.prototype.randRoll = function () {
    return Math.floor(Math.random() * 11) + 0;
};
