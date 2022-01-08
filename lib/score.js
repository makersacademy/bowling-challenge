const Rules = require('../lib/rules.js')

class Score {
  constructor(scorecard, RulesClass = Rules){
    this.framesArray = scorecard.framesArray;
    this.rulesClassInstance = new RulesClass();
  }

  calculateScore = () => {
    let score = 0;
    let index = 0;
    const flattenedFramesArray = this.framesArray.flat();

    this.framesArray.forEach( (frame) => {
      if (this.#strikeOrSpare(frame)) {
        let slicedArray = flattenedFramesArray.slice(index,index+3);
        score += slicedArray.reduce((accumulator, current) => accumulator + current);    
      } else {
        score += frame.reduce((accumulator, current) => accumulator + current);    
      } 
      index += this.#advanceIndex(frame)
    })
    return score
  }

  #strikeOrSpare = (frame) => {
    return this.rulesClassInstance.isStrike(frame) || this.rulesClassInstance.isSpare(frame)
  }

  #advanceIndex = (frame) => {
    if (this.rulesClassInstance.isStrike(frame)) {
      return 1
    } else {
      return 2
    }
  }
}


module.exports = Score;