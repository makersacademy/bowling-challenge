'use strict'

function Score(){
    this.subtotal = 0;
    this.scoreArray = [];
}

Score.prototype.singleScoreSum = function(one, two){
    return one + two;
}

Score.prototype.addRoll = function(one, two) {
    this.scoreArray.push([one,two])
}

Score.prototype.totalScore = function(array){
    for(var i=0; i<array.length; i++){
        this.subtotal += this.singleScoreSum(array[i][0], array[i][1]);
    }
    return this.subtotal;
}

// [[2,3],[5,6],[7,6],[6,3],[2,3],[6,9],[5,6],[5,6],[2,8],[7,7]]