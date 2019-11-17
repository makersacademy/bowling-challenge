'use strict'

function Score(){
    this.subtotal = 0;
    this.scoreArray = [];
}

Score.prototype.singleScoreSum = function(arr) {
    return arr.reduce((a,b) => a + b, 0)
}


Score.prototype.addRoll = function(one, two) {
    this.scoreArray.push([one,two])
}

Score.prototype.totalScore = function(array){
    for(var i=0; i<array.length; i++){
        this.subtotal += this.singleScoreSum(array[i]);
        console.log(this.subtotal)
    }
    return this.subtotal;
}

Score.prototype.showSum = function(){
    return this.subtotal;
}

Score.prototype.isSpare = function([a,b]) {
    (a + b) === 10 ? true : false;
}

Score.prototype.isStrike = function([a,b]) {
    a === 10 ? true : false;
}

// [[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8,6]]