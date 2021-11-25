const Frame = require("./frame");

class Scorecard {
  constructor(bowls = []) {
    this.bowls = bowls;
    this.setFrames();
  }

  setFrames = (bowls = this.bowls) =>
    (this.frames = this.covertArrToFrames(bowls));

  covertArrToFrames = (bowls) => this.toFrames(this.sliceBowlsArray(bowls));

  addBowl = (knockdowns) => {
    this.bowls.push(knockdowns);
    this.setFrames();
  };

  score = (frames = this.frames) => this.sumArr(this.frameScores(frames));

  sumArr = (baseArr) => {
    if (baseArr.length === 0) return 0;
    return baseArr.reduce((prev, next) => prev + next);
  };

  board = (frames = this.frames) => {
    let allscores = this.frameScores(frames);
    let accumulator = [];
    for (let i = 0; i < allscores.length; i++) {
      let value = this.sumArr(allscores.slice(0, i + 1));
      accumulator.push(value);
    }
    return accumulator;
  };

  // Maps the individual scores of frames 0 - 9
  frameScores = (frames = this.frames) => {
    let allScores = [];
    for (let i = 0; i < this.maxFrames(frames); i += 1) {
      allScores.push(frames[i].score());
    }
    return allScores;
  };

  maxFrames = (frames = this.frames) => {
    if (frames.length >= 10) {
      return 10;
    } else {
      return frames.length;
    }
  };

  // Converts a sliced bowls array into an array of Frame objects
  toFrames = (slicedArr) => {
    return slicedArr.map((_f, index) => {
      return this.createFrame(slicedArr, index);
    });
  };

  createFrame = (slicedArr, index) => {
    return new Frame(
      slicedArr[index],
      slicedArr[index + 1],
      slicedArr[index + 2]
    );
  };

  // Slices a bowls array into 2-value arrays, e.g. [1,2,10,3,4] => [[1,2],[10,0],[3,4]]
  sliceBowlsArray = (bowls = this.bowls) => {
    let preslicedBowls = this.addZerosAfterTens(bowls);
    let slicedBowls = [];
    for (let i = 0; i < preslicedBowls.length; i += 2) {
      slicedBowls.push(preslicedBowls.slice(i, i + 2));
    }
    return slicedBowls;
  };

  addZerosAfterTens = (bowls) => {
    let newBowls = bowls;
    for (let i = 0; i < bowls.length; i++) {
      if (newBowls[i] == 10) {
        newBowls.splice(i + 1, 0, 0);
      }
    }
    return newBowls;
  };
}

module.exports = Scorecard;
