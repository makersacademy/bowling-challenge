'use strict'

function Score(){
    this.subtotal = 0;
    this.frame = [];
    this.scoreArray = [];
}

Score.prototype.singleScoreSum = function(arr) {
    return arr.reduce((a,b) => a + b, 0)
}

Score.prototype.addRoll = function(number) {
    this.frame.push(number);
}

Score.prototype.addFrame = function(frame) {
    this.scoreArray.push(frame);
    this.frame = [];
}

Score.prototype.totalScore = function(array){
    this.subtotal = 0;
    for (var j=1; j<=array.length; j++) {
        if (this.isStrike(array[j-1])) {
            if(array[j] === undefined){
                break
            }
            this.subtotal += (array[j][0] + array[j][1]);
        }
        else if (this.isSpare(array[j-1])) {
            if(array[j] === undefined){
                break
            }
            this.subtotal += array[j][0];
        }
    }

    for(var i=0; i<array.length; i++){
        this.subtotal += this.singleScoreSum(array[i]);
    }

    return this.subtotal;
}

Score.prototype.showSum = function(){
    return this.subtotal;
}

Score.prototype.isSpare = function([a,b]) {
    return ((a + b) === 10 ? true : false);
}

Score.prototype.isStrike = function([a,b]) {
    return (a === 10 ? true : false);
}

// [[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8,6]]