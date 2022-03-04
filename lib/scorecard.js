const Frame = require("../lib/frame");
const LastFrame = require("../lib/lastFrame");

class ScoreCard {

  constructor(frameClass, lastFrameClass){
    this.frameClass = frameClass
    this.lastFrameClass = lastFrameClass
    this.frames = []
  }

  currentFrameNumber(){
    return this.frames.length
  }
  
  logRoll(pinsDowned) {
    if (this.#gameComplete()) {
      throw "Game is over";
    }
    this.#currentFrame().logRoll(pinsDowned)
  }

  score(){
    return this.frames.map ((frame, frameIndex) => {
      return this.#currentFrameScore(frameIndex, frame) 
    }).reduce((sum, score) => sum + score, 0)
  }

// Private methods
  #gameComplete(){
    return (this.frames.length == 10 && this.frames.at(-1).frameComplete() ? true : false )
  }

  #currentFrameScore(frameNo, frame){
    if (frame.frameComplete() == false) { return 0 }
    if (frame.openFrame() == true) { return frame.sumFrame() }

    return this.#bonusFrameScore(frame, frameNo)
  }

  #bonusFrameScore(frame, frameNo){
    const bonusRolls = this.#strikeOrSpare(frame)
    return (this.#bonusPoints(frameNo, bonusRolls) > 0 ? 10 + this.#bonusPoints(frameNo, bonusRolls) : 0)
  }

  #strikeOrSpare(frame) {
    return (frame.strikeFrame() == true ? 2 : 1 )
  }

  #bonusPoints(frameNo, rollsAhead){
    const frameScores = this.#getValidRolls(frameNo, rollsAhead)
    return this.#sumBonusRolls(frameScores,rollsAhead )
  }

  #sumBonusRolls(rolls, rollsAhead){
    if (rolls.slice(0,rollsAhead).length == rollsAhead) {
      return rolls.slice(0,rollsAhead).reduce((sum, score) => sum + score, 0)
    }else{
      return 0
    } 
  }

  #getValidRolls(frameNo, rollsAhead){
    const framesAhead = this.frames.slice(frameNo)
    const frameScores = framesAhead.map( frame => frame.allRolls()).flat()

    return this.#stripStrikeorSparePoints(frameScores, rollsAhead )
  }

  #stripStrikeorSparePoints(rolls, rollsAhead ){
    return (rollsAhead == 1 ? rolls.slice(2) :  rolls.slice(1))
  }

  #currentFrame() {
    if (this.#newFrame() == true){
      const nextFrameNumber = this.currentFrameNumber() + 1

      if (this.frames.length + 1 == 10){
        this.frames.push(new this.lastFrameClass() )
      }else{
        this.frames.push(new this.frameClass())
      }
    }

    return this.frames.at(-1)
  }

  #newFrame() {
  if (this.frames.length == 0) { return true }
  if (this.frames.length == 10) { return false }  
  if (this.frames.at(-1).frameComplete() == true) { return true }
  return false
  }

}

module.exports = ScoreCard;