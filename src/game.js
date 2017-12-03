function Game() {
    this.scoreCard = [];
};

Game.prototype.roll = function (numberOfPinsDown) {
    this.scoreCard.push(numberOfPinsDown);
};

Game.prototype.score = function () {
    var overallScore = 0;
    var rollNumber = 0

    for (frame = 0; frame < 10; frame++) {

        if (this.isStrike(rollNumber)) {
            overallScore += 10 + this.scoreCard[rollNumber + 1] + this.scoreCard[rollNumber + 2];
            rollNumber++;
        } else {
            if (this.isSpare(rollNumber)) {
                overallScore += 10 + this.scoreCard[rollNumber + 2];
            } else {
                overallScore += this.scoreCard[rollNumber] + this.scoreCard[rollNumber + 1];
            }
            rollNumber += 2;
        }
    }
    return overallScore;
};

Game.prototype.isStrike = function (rollNumber) {
    return this.scoreCard[rollNumber] === 10;
};

Game.prototype.isSpare = function (rollNumber) {
    return this.scoreCard[rollNumber] + this.scoreCard[rollNumber + 1] === 10;
};