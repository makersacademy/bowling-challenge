var game, scoring, total;

var Bowling = function () {
    "use strict";
    this.game = [];
    this.scoring = [];
    this.total = 0
};

Bowling.prototype.roll = function(roll) {
    
    if(this.game.length > 0) {
        if(this.game[this.framePlace()].length == 1){
            this.game[this.framePlace()].push(roll); 
            this.scoring.push(roll);         
        }
        else {
            this.game.push([roll]);
            this.scoring.push(roll);  
        }
    }
    else {
        this.game.push([roll]);
        this.scoring.push(roll);  
    }

};

Bowling.prototype.framePlace = function() {
    return this.game.length - 1;
};

Bowling.prototype.frameSize = function() {
    return this.game[(this.game.length - 1)].length;
};

Bowling.prototype.addUpGame = function() {
    var newTotal = this.scoring.reduce(function(a, b) {
        return a + b;
    });

    return this.total = newTotal;
};
