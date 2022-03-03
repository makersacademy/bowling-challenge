class ScoreCard {

  constructor(frameClass, lastFrameClass){
    this.frameClass = frameClass
    this.lastFrameClass = lastFrameClass
  }

  currentFrameNumber(){
    return 0
  }
}

module.exports = ScoreCard;