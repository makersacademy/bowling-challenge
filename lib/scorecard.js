const Frame = require("../lib/frame");
const LastFrame = require("../lib/lastFrame");

class ScoreCard {

  constructor(frameClass, lastFrameClass){
    this.frameClass = frameClass
    this.lastFrameClass = lastFrameClass
    this.frames = new Map()
  }

  currentFrameNumber(){
    return this.frames.size
  }
  

  logRoll(pinsDowned) {
    //return :game_complete if game_complete?
    this.#currentFrame().logRoll(pinsDowned)
    console.log(this.frames.get(this.currentFrameNumber()).allRolls())
  }

// Private methods

  #currentFrame() {
    if (this.#newFrame() == true){
      const nextFrameNumber = this.currentFrameNumber() + 1

      if (this.frames.size + 1 == 10){
        const newLastFrame = new this.lastFrameClass()
        this.frames.set(nextFrameNumber, newLastFrame)
        // add last frame class instance to the frames map
      }else{
        // add a frame class instance to the frames map
        const newFrame = new this.frameClass()
        this.frames.set(nextFrameNumber, newFrame)

      }
    }

    return this.frames.get(this.currentFrameNumber())
  }

  #newFrame(){
  if (this.frames.size == 0) { return true }
  if (this.frames.size == 10) { return false }  
  if (this.frames.get(this.currentFrameNumber()).frameComplete() == true) { return true }
  return false
  }

}

module.exports = ScoreCard;