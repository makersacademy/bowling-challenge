'use strict';

function Bowling (){
    this.STARTING_SCORE = 0;
    this.score = this.STARTING_SCORE;
    this.rolls = []
    this.frame = []
}

Bowling.prototype.getCurrentScore = function(){
    return this.score;
};

Bowling.prototype.rollBall = function(roll){
    this.rolls.push(roll)
};

Bowling.prototype.calculateScore = function() {
    this.score = this.rolls.reduce((a,b) => a + b, 0)
};

Bowling.prototype.makeFrame = function(){
    var i, j, temparray, chunk = 2;
    for(i = 0, j = this.rolls.length; i < j; i += chunk) {
        temparray = this.rolls.slice(i, i + chunk);
        this.frame.push(temparray)
    }
};