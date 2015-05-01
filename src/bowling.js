var game, scoring, total;

var Bowling = function () {
    "use strict";
    this.game = [];
    this.scoring = [];
    this.total = 0;
};

Bowling.prototype.roll = function (roll) {
    "use strict";

    if (this.game.length > 0 && this.game.length < 10) { // frame 2 - frame 9
        if (this.game[this.framePlace()] === undefined) {
            if (roll === 10) {
                if (this.game.length === 9) { // this is the first roll of the tenth frame
                    this.game.push([10]);
                    this.scoring.push(roll);
                    if ((this.game[8][1] !== null) && (this.game[8][0] + this.game[8][1] === 10)) {
                    this.scoring.push(roll);
                    }
                }
                else { // this is a strike
                    this.game.push([10, null]);
                    this.scoring.push(roll);
                }
            } else {
                this.game.push([roll]);
                this.scoring.push(roll);
            }

            if ((this.game[this.game.length - 2][1] !== null) && (this.game[this.game.length - 2][0] + this.game[this.game.length - 2][1] === 10)) {
                this.scoring.push(roll);
            }
            if ((this.game.length > 1) && this.game[this.game.length - 2][1] === null) {
                this.scoring.push(roll);
            }
            if ((this.game.length > 2) && this.game[this.game.length - 3][1] === null) {
                this.scoring.push(roll);
            }

        }
        else { // this is the first roll of a new frame, makes index 1, length 2
            this.game[this.framePlace()].push(roll);
            if ((this.game.length > 1) && this.game[this.game.length - 2][1] === null) {
                this.scoring.push(roll);
            }
            return this.scoring.push(roll);
        }
    } else if (this.game.length === 10) { // this is the second and third bowls of tenth frame
            this.game[9].push(roll);
            this.scoring.push(roll);
            if (this.game[8][1] === null) {
                this.scoring.push(roll);
            }
            if (this.game[9][0] === 10) {
                this.scoring.push(roll);
            }
            if (this.game[9].length === 2 && this.game[9][0] === 10 ) {
                this.scoring.push(roll);                
            }

    } else if (this.game.length < 1) { // this is the first roll of the game, makes index 0, length 1
        if (roll === 10) {
            this.game.push([10, null]);
            this.scoring.push(roll);
        } else {
            this.game.push([roll]);
            this.scoring.push(roll);
        }
    }
};

Bowling.prototype.framePlace = function () {
    "use strict";
    //return this.game.length - 1;
    return this.game.length;
};

Bowling.prototype.addUpGame = function () {
    "use strict";
    var newTotal = this.scoring.reduce(function(a, b) {
        return a + b;
    });

    return this.total = newTotal;
};
