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

    // calculation scenario for spare before the final roll is rolled
    if ((this.rolls.length % 2 === 1) &&
        (this.rolls.length < 18) &&
        (roll === 10)) {
        this.rolls.push(null);
    }

};

Scoreboard.prototype.getFrameScore = function (rolls, bonusRolls) {

    //regular frame score
    if (rolls[0] + rolls[1] < 10) {
        return rolls[0] + rolls[1];
    }

    //strike plus strike score
    if (rolls[0] === 10 && bonusRolls[0] === 10) {
        return rolls[0] + bonusRolls[0] + bonusRolls[1] + bonusRolls[2];
    }

    //strike plus reg frame score
    if (rolls[0] === 10) {
        return rolls[0] + bonusRolls[0] + bonusRolls[1];
    }

    //spare score
    return rolls[0] + rolls[1] + bonusRolls[0];

};


Scoreboard.prototype.getAllFrameScores = function () {
    var frameScores = [];
    var totalScore = 0;

    //below we tell the loop to either go until the end of the rolls array
    //or until array index 18. this does not calculate the final frame

    for (var i = 0; i < Math.min(this.rolls.length, 18); i += 2) {
        //it slices the array to 'create' frames of 2 rolls
        var rolls = this.rolls.slice(i, i + 2);
        //it slices the array to 'create' bonus rolls of max 3 rolls in case of spares/strikes
        var bonusRolls = this.rolls.slice(i + 2, i + 5);
        //we increment to a totalScore the sums of the frames and any subsequent bonuses
        totalScore += this.getFrameScore(rolls, bonusRolls)
        //we push those totals in a total score array so we see the score per frame
        frameScores.push(totalScore);
    }

    //this calculates the final frame
    if(this.rolls.length > 18) {
        //this selects just the final frame, sums the values of said frame and increments the total score
        totalScore += this.rolls.slice(18, 21).reduce(function(a, b){return a + b})
        //you push the total of the final frame into the frame scores array
        frameScores.push(totalScore);
    }

    return frameScores;



};




