var game, scoring, total;

var Bowling = function () {
    "use strict";
    this.game = [];
    this.scoring = [];
    this.total = 0;
};

Bowling.prototype.roll = function (roll) {
    "use strict";
    if (this.game.length > 0) {
        if (this.game[this.framePlace()].length === 1) { // this is the second roll of a frame, you've added an equals
            this.game[this.framePlace()].push(roll);
            this.scoring.push(roll);
            if ((this.game.length > 1) && this.game[this.game.length - 2][1] === null) {
                this.scoring.push(roll);
            }
        } else { // this is the first roll of a new frame
            if (roll === 10) {
                this.game.push([10, null]);
                this.scoring.push(roll);
                if ((this.game[this.game.length - 2][1] !== null) && (this.game[this.game.length - 2][0] + this.game[this.game.length - 2][1] === 10)) {
                    this.scoring.push(roll);
                }
                if ((this.game.length > 1) && this.game[this.game.length - 2][1] === null) {
                    this.scoring.push(roll);
                }
                if ((this.game.length > 2) && this.game[this.game.length - 3][1] === null) {
                    this.scoring.push(roll);
                }
            } else {
                this.game.push([roll]);
                this.scoring.push(roll);
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
        }
    } else { // this is the first roll of the game
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
    return this.game.length - 1;
};

Bowling.prototype.addUpGame = function () {
    "use strict";
    var newTotal = this.scoring.reduce(function(a, b) {
        return a + b;
    });

    return this.total = newTotal;
};
