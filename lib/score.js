const Rules = require('../lib/rules.js');

class Score {
  constructor(scorecard, RulesClass = Rules) {
    this.framesArray = scorecard.framesArray;
    this.rulesClassInstance = new RulesClass();
  }

  calculateScore = () => {
    let [score, index] = [0, 0];
    const flattenedFramesArray = this.framesArray.flat();

    this.framesArray.forEach( (frame) => {
      if (this.#strikeOrSpare(frame)) {
        const slicedArray = flattenedFramesArray.slice(index, index+3);
        score += this.#sumOfArray(slicedArray);
      } else {
        score += this.#sumOfArray(frame);
      }
      index += this.#advanceIndex(frame);
    });
    return score;
  };

  #sumOfArray = (array) => array.reduce((accumulator, current) => accumulator + current);

  #strikeOrSpare = (frame) => {
    return this.rulesClassInstance.isStrike(frame) || this.rulesClassInstance.isSpare(frame);
  };

  #advanceIndex = (frame) => {
    if (this.rulesClassInstance.isStrike(frame)) {
      return 1;
    } else {
      return 2;
    }
  };
}

module.exports = Score;
