'use strict';

function Bowling (){
    this.STARTING_SCORE = 0;
    this.score = this.STARTING_SCORE;
}

Bowling.prototype.getCurrentScore = function() {
    return this.score;
}