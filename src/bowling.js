var game, scoring, total;

var Bowling = function () {
    "use strict";
    this.game = [];
    this.scoring = [];
    this.total = 0
};

Bowling.prototype.roll = function(roll) {
    
    if(this.game.length > 0) {
        if(this.game[this.framePlace()].length == 1) { // this is the second roll of a frame
            this.game[this.framePlace()].push(roll); 
            this.scoring.push(roll);         
        }
        else { // this is the first roll of a new frame
            if(roll == 10) {
                this.game.push([10, null]);
            } else {
                this.game.push([roll]);
                this.scoring.push(roll);
                    if(this.game[this.game.length - 2][0] + this.game[this.game.length - 2][1] == 10) {
                        this.scoring.push(roll);                    
                    }
            }
        }
    }
    else { // this is the first roll of the game
        if(roll == 10) {
                this.game.push([10, null]);
            } else {
                this.game.push([roll]);
                this.scoring.push(roll);
        }
    }

};

Bowling.prototype.framePlace = function() {
    return this.game.length - 1;
};

Bowling.prototype.addUpGame = function() {
    var newTotal = this.scoring.reduce(function(a, b) {
        return a + b;
    });

    return this.total = newTotal;
};
