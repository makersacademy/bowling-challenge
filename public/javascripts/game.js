var Game = function () {
    this.roundTotalScore = 0;
    this.rolls = [];
    this.score1 = 0;
    this.score2 = 0;
    this.frames = [];
};


Game.prototype = {
    currentScore: function () {
        return this.roundTotalScore;
    },
    roll1: function (score) {
        return this.score1 = score;
    },
    roll2: function (score) {
        return this.score2 = score;
    },
    addRolls: function () {
        if (this.score1 === 10 || this.score1 === 'strike') {
            this.score2 = 0;
            return this.roundTotalScore = 10;
        }
        return this.roundTotalScore = this.score1 + this.score2;
    },
    saveRolls: function () {
        return this.rolls.push(this.score1, this.score2);
    },

    savePoints: function () {

    },
    resetScore: function () {
        this.score1 = 0;
        this.score2 = 0;
        this.roundTotalScore = 0;
    },
    bonusPoints: function () {
        for (i = 0; i < this.rolls.length; i++) {

        }
    }
};

var game = new Game();
game.roll1(3);
game.roll2(5);
game.addRolls();
game.saveRolls();
console.log(game.rounds);
console.log(game.roundTotalScore);
game.resetScore();
game.roll1(5);
game.roll2(4);
game.addRolls();
game.saveRolls();
console.log(game.roundTotalScore);
console.log(game.rounds);
console.log(game.rounds.length);
console.log(
    game.rounds.reduce((a, b) => a + b, 0)
);
