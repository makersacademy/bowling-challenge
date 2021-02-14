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

  gameRoll(rollsArray) {
    rollsArray.forEach((x) => {
      this.roll(x);
    });
    return this.score();
  }

  score() {
    this.framesArray.forEach(() => {
      switch (typeof this.rollsArray[this.rollIndex] === "number") {
        case this.isStrike():
          this.addStrikePoints();
          this.incrementRollIndexByOne();
          this.addPointsToFramesArray();
          break;
        case this.isSpare():
          this.addSparePoints();
          this.incrementRollIndexByTwo();
          this.addPointsToFramesArray();
          break;
        default:
          this.addPoints();
          this.incrementRollIndexByTwo();
          this.addPointsToFramesArray();
          break;
      }
    });
    return this.points;
  }

  isStrike() {
    return this.rollsArray[this.rollIndex] === 10;
  }

  addStrikePoints() {
    this.points +=
      this.rollsArray[this.rollIndex] +
      this.rollsArray[this.rollIndex + 1] +
      this.rollsArray[this.rollIndex + 2];
  }

  isSpare() {
    return (
      this.rollsArray[this.rollIndex] + this.rollsArray[this.rollIndex + 1] ===
      10
    );
  }

  addSparePoints() {
    this.points +=
      this.rollsArray[this.rollIndex] +
      this.rollsArray[this.rollIndex + 1] +
      this.rollsArray[this.rollIndex + 2];
  }

  addPoints() {
    this.points +=
      this.rollsArray[this.rollIndex] + this.rollsArray[this.rollIndex + 1];
  }

  incrementRollIndexByOne() {
    this.rollIndex ++;
  }

  incrementRollIndexByTwo() {
    this.rollIndex += 2;
  }

  addPointsToFramesArray() {
    this.framesArray[this.frameIndex].push(this.points);
    this.frameIndex ++;
  }
}