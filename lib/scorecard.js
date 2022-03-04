const Frame = require("../lib/frame");
const LastFrame = require("../lib/lastFrame");
var _ = require('lodash/core');

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
    //return :game_complete if game_complete?
    this.#currentFrame().logRoll(pinsDowned)
    console.log(this.frames.at(-1).allRolls())
  }

// Private methods

  #currentFrameScore(frameNo, frame){
    if (frame.frameComplete() == false) { return 0 }
    if (frame.openFrame() == true) { return frame.sumFrame() }
    
    return this.#bonusFrameScore(frame, frameNo)
  }

  #bonusFrameScore(frame, frameNo){
    const bonusRolls = this.#strikeOrSpare(frame)
    this.#bonusPoints(frameNo, bonusRolls) > 0 ? 10 + this.#bonusPoints(frameNo, bonusRolls) : 0
  }

  #strikeOrSpare(frame) {
    return (frame.strikeFrame() == true ? 2 : 1 )
  }

 #bonusPoints(frameNo, rollsAhead){
    framesAhead = this.frames.slice(frameNo - 1)

    frameScores = framesAhead.map( frame => frame.allRolls()).flat

    frameScores = rollsAhead == 1 ? frameScores.slice(1) : frameScores.slice(0)

    if (frameScores.slice(0,rollsAhead - 1).length == rollsAhead) {
      return _.sum(frameScores.slice(0,rollsAhead - 1))
    }else{
      return 0
    }

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