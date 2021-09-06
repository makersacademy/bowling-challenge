class Frame {

constructor(frameNumber) {
    this.frameNumber = frameNumber;
    this.frameTotal = 0;
    this.score = new Score();
    this.strike = null
    this.spare = null
    this.savedScore = this.score.savedScore;
}

firstBowl(pins) {
    this.score.firstBowl(pins);
}

secondBowl(pins) {
    this.score.secondBowl(pins)
}

calculateScore() {
    this.score.calculateScore();
    this.frameTotal = this.score.score;
}

isStrike() {
    this.score.isStrike()
    this.strike = this.score.strike
}

isSpare() {
    this.score.isSpare()
    this.spare = this.score.spare
}
















}