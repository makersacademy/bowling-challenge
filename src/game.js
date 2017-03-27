function Game() {
    this.eachFrameScore = [];
    this.rollCount = 0;
};

var x;

Game.prototype.grandTotal = function(){
    this.eachFrameScore.reduce(function(y, z){
        return x = y + z;
    }, 0);
    return x;
};
