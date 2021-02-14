"use-strict";

class Game {
  constructor() {
    this.rollsArray = [];
    this.rollIndex = 0;
    this.points = 0;
    this.framesArray = [[], [], [], [], [], [], [], [], [], []];
    this.frameIndex = 0;
  }

  roll(pins) {
    this.rollsArray.push(pins);
  }

  score() {
    this.framesArray.forEach(() => {
      switch (typeof this.rollsArray[this.rollIndex] === "number") {
        case this.isStrike():
          this.addStrikePointsToFrame();
          this.rollIndex ++;
          this.framesArray[this.frameIndex].push(this.points);
          this.frameIndex ++;
          break;
        case this.isSpare():
          this.addSparePointsToFrame();
          this.rollIndex += 2;
          this.framesArray[this.frameIndex].push(this.points);
          this.frameIndex ++;
          break;
        default:
          this.addPointsToFrame();
          this.rollIndex += 2;
          this.framesArray[this.frameIndex].push(this.points);
          this.frameIndex ++;
      }
    });
    return this.points;
  }

  isStrike() {
    return this.rollsArray[this.rollIndex] === 10;
  }

  addStrikePointsToFrame() {
    this.points +=
      this.rollsArray[this.rollIndex] +
      this.rollsArray[this.rollIndex + 1] +
      this.rollsArray[this.rollIndex + 2];
  }

  isSpare() {
    return this.rollsArray[this.rollIndex] + this.rollsArray[this.rollIndex + 1] === 10;
  }

  addSparePointsToFrame() {
    this.points +=
      this.rollsArray[this.rollIndex] +
      this.rollsArray[this.rollIndex + 1] +
      this.rollsArray[this.rollIndex + 2];
  }

  addPointsToFrame() {
    this.points += this.rollsArray[this.rollIndex] + this.rollsArray[this.rollIndex + 1];
  }
}
