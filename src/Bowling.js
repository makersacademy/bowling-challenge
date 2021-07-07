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

Bowling.prototype.rollBall = function(scoreinput){
    this.rolls.push(scoreinput);
    if(scoreinput == 10){
        this.rolls.push(0);
    };
};

Bowling.prototype.calculateScore = function() {
    this.score = this.rolls.reduce((a,b) => a + b, 0)
};

Bowling.prototype.makeFrame = function(){
    var i, j, temp_arr, chunk = 2;
    for(i = 0, j = this.rolls.length; i < j; i += chunk) {
        temp_arr = this.rolls.slice(i, i + chunk);
        this.frame.push(temp_arr)
    };
};