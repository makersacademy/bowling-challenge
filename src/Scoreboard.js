'use strict';

function Scoreboard() {
    this.rolls = [];
};

Scoreboard.prototype.gameIsFinished = function () {
    if (this.rolls.length === 21) {
        return true;
    }

    if ((this.rolls.length === 20) &&
        (this.rolls[18] + this.rolls[19] < 10)) {
        return true;
    }

    return false;

};

Scoreboard.prototype.isRollValid = function (roll) {
    if (roll > 10 || roll < 0) {
        return false;
    }

    //helper variables

    var secondRoll = (this.rolls.length % 2 === 1) && (this.rolls.length < 19)
    var lastFrameRoll = (this.rolls.length === 19) && (this.rolls[18] !== 10)
    var finalBonusRoll = (this.rolls.length === 20) && (this.rolls[18] === 10) && (this.rolls[19] !== 10)

    if (secondRoll || lastFrameRoll || finalBonusRoll) {
        return roll <= 10 - this.rolls[this.rolls.length - 1]
    }

    return true;
};

Scoreboard.prototype.addRoll = function (roll) {

    if (this.gameIsFinished() || !this.isRollValid(roll)) {
        // exit the function without saving the roll
        return;
    }

    //otherwise add the roll
    this.rolls.push(roll);

    if ((this.rolls.length % 2 === 1) &&
        (this.rolls.length < 18) &&
        (roll === 10)) {
        this.rolls.push(null);
    }

};

Scoreboard.prototype.getFrameScore = function (rolls, bonusRolls) {
    if (rolls[0] + rolls[1] < 10) {
        return rolls[0] + rolls[1];
    }

    if (rolls[0] === 10) {
        return rolls[0] + bonusRolls[0] + bonusRolls[1];
    }

    return rolls[0] + rolls[1] + bonusRolls[0];
    
};
Scoreboard.prototype.getAllFrameScores = function () {


};




