function Game() {
    this.frames = [];

    for (frame = 0; frame < 11; frame++) {
        this.frames.push([0, 0]);
    };
};

Game.prototype.scoreRoll = function (frameNumber, rollNumber, pins) {
    this.frames[frameNumber][rollNumber] = pins;
};

Game.prototype.score = function () {
    var frameScore = 0,
        firstRoll = 0,
        secondRoll = 0;
    nextFirstRoll = 0, nextSecondRoll = 0;

    for (i = 0; i < 10; i++) {
        firstRoll = this.frames[i][0];
        secondRoll = this.frames[i][1];
        frameScore += firstRoll + secondRoll;

        if (isStrike(firstRoll)) {
            if (isStrike(this.frames[i + 1][0])) {
                frameScore += 10 + this.frames[i + 2][0];
            } else {
                frameScore += this.frames[i + 1][0] + this.frames[i + 1][1];
            };

        } else if (isSpare(frameScore)) {
            frameScore += this.frames[i + 1][0];
        };
    };
    return frameScore;

    function isStrike(firstRoll) {
        return firstRoll === 10;
    };

    function isSpare(frameScore) {
        return frameScore === 10;
    };
};