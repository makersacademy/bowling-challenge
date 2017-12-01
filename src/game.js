function Game() {
    this.frames = [];

    for (i = 0; i < 10; i++) {
        this.frames.push([0, 0]);
    };
};

Game.prototype.scoreRoll = function (frameNumber, rollNumber, pins) {
    this.frames[frameNumber][rollNumber] = pins;
    console.log(this.frames);
};

Game.prototype.score = function () {
    var frameScore = 0;
    for (i = 0; i < 10; i++) {
        frameScore += this.frames[i][0] + this.frames[i][1];
        if (this.frames[i][0] === 10) {
            frameScore += this.frames[i + 1][0] + this.frames[i + 1][1];
        }
        else if (frameScore === 10) {
            frameScore += this.frames[i + 1][0];
        };
    };
    return frameScore;
};