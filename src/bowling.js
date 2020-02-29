function BowlingGame (){
    this.score = 0;
    this.scoreTable = [];

BowlingGame.prototype.roll = function(pinsdown1, pinsdown2){
        this.scoreTable.push(pinsdown1, pinsdown2) 
    };  
    
BowlingGame.prototype.showScore = function(){
    return this.scoreTable = (this.scoreTable).reduce(function(a, b) { return a + b; }, 0);
};
    // if (pinsdown1 + pinsdown2 !== 10){
    //         this.score = this.score + pinsdown1 + pinsdown2
    //     }
    //     else 
    //     this.score = this.score + pinsdown1 + pinsdown2 + 
    // }  
};
