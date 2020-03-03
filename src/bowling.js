function BowlingGame (){
    this.score = [];
    this.scoreTable = [];
    this.score_per_frame = 0;


BowlingGame.prototype.roll = function(pinsdown1, pinsdown2){
        this.scoreTable.push(pinsdown1, pinsdown2) 
    };  

BowlingGame.prototype.showScore = function(){
    var rollsNumber = 20
    for (var i = 0; i < rollsNumber; i = i + 2) {
        // spares scoring:
        if((this.scoreTable[i] + this.scoreTable[i + 1] === 10) && this.scoreTable[i] !== 10){
            this.score_per_frame = this.scoreTable[i] + this.scoreTable[i+1] + this.scoreTable[i+2]
        }
        // strikes scoring:
        else if (this.scoreTable[i] === 10 && this.scoreTable[i+2] !== 10 ) {
            this.score_per_frame = this.scoreTable[i] + this.scoreTable[i+2] + this.scoreTable[i+3]
        }
        // 2 consecutive strikes scoring:
        else if (this.scoreTable[i] === 10 && this.scoreTable[i+2] === 10 ) {
            this.score_per_frame = this.scoreTable[i] + this.scoreTable[i+2] + this.scoreTable[i+4]
        }
        // a "Normal" frame scoring:
        else {
            this.score_per_frame = this.scoreTable[i] + this.scoreTable[i+1] 
        }
        // adding the frame total to the score array:
        (this.score).push(this.score_per_frame)
        
    }
    return (this.score).reduce(function(a, b) { return a + b; }, 0);
    };
};
