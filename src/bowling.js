function BowlingGame (){
    this.score = [];
    this.scoreTable = [];
    this.score_per_frame = 0;


BowlingGame.prototype.roll = function(pinsdown1, pinsdown2){
        this.scoreTable.push(pinsdown1, pinsdown2) 
    };  

BowlingGame.prototype.showScore = function(){
    var arrayLength = this.scoreTable.length;
    for (var i = 0; i < arrayLength; i = i + 2) {
        if((this.scoreTable[i] + this.scoreTable[i + 1] === 10) && this.scoreTable[i] !== 10){
            this.score_per_frame = this.scoreTable[i] + this.scoreTable[i+1] + this.scoreTable[i+2]
        }
        else if (this.scoreTable[i] === 10) {
            this.score_per_frame = this.scoreTable[i] + this.scoreTable[i+2] + this.scoreTable[i+3]
        }
        else {
            this.score_per_frame = this.scoreTable[i] + this.scoreTable[i+1] 
        }
        (this.score).push(this.score_per_frame)
        
    }
    return (this.score).reduce(function(a, b) { return a + b; }, 0);
    };
};
