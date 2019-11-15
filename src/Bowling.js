'use strict';

function Bowling (){
    this.STARTING_SCORE = 0;
    this.score = this.STARTING_SCORE;
    this.rolls = []
}

Bowling.prototype.getCurrentScore = function() {
    return this.score;
};

Bowling.prototype.rollBall = function(roll){
    this.rolls.push(roll)
};

Bowling.prototype.calculateScore = function() {
    this.score = this.rolls.reduce((a,b) => a + b, 0)
}