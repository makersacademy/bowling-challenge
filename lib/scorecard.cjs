
class ScoreCard {

  constructor(frameClass, lastFrameClass){
    this.frameClass = frameClass
    this.lastFrameClass = lastFrameClass
    this.frames = []
  }

  formatFrames(){
    let formattedFrames =  this.frames.map((frame) => {
      return `|${frame.formatFrame()}`
    }).join("")

    for(let i = 0; i < 10 - this.frames.length ; i++ ){
      formattedFrames += "|  |  "
    }
    return formattedFrames
  }

  formatScores(){
    
  }


  currentFrameNumber(){
    return this.frames.length
  }

  currentFrame(){
    return this.frames.at(-1)
  }
  
  logRoll(pinsDowned) {
    if (this.gameComplete()) {
      throw new Error("Game is over");
    }
    this.#currentFrame().logRoll(pinsDowned)
  }

  score(){
    return this.frames.map ((frame, frameIdx) => {
      return this.#currentFrameScore(frameIdx, frame) 
    }).reduce((sum, score) => sum + score, 0)
  }

  gameComplete(){
    return (this.frames.length == 10 && this.frames.at(-1).frameComplete() ? true : false )
  }
// Private methods


  #currentFrameScore(frameIdx, frame){
    if (!frame.frameComplete()) { return 0 }
    if (frame.openFrame()) { return frame.sumFrame() }

    return this.#bonusFrameScore(frame, frameIdx)
  }

  #bonusFrameScore(frame, frameIdx){
    const bonusRolls = this.#strikeOrSpare(frame)
    return (this.#bonusPoints(frameIdx, bonusRolls) > 0 ? 10 + this.#bonusPoints(frameIdx, bonusRolls) : 0)
  }

  #strikeOrSpare(frame) {
    return (frame.strikeFrame() ? 2 : 1 )
  }

  #bonusPoints(frameIdx, rollsAhead){
    const frameScores = this.#getValidRolls(frameIdx, rollsAhead)
    return this.#sumBonusRolls(frameScores,rollsAhead )
  }

  #sumBonusRolls(rolls, rollsAhead){
    if (rolls.slice(0,rollsAhead).length == rollsAhead) {
      return rolls.slice(0,rollsAhead).reduce((sum, score) => sum + score, 0)
    }else{
      return 0
    } 
  }

  #getValidRolls(frameIdx, rollsAhead){
    const framesAhead = this.frames.slice(frameIdx)
    const frameScores = framesAhead.map( frame => frame.allRolls()).flat()

    return this.#stripStrikeorSparePoints(frameScores, rollsAhead )
  }

  #stripStrikeorSparePoints(rolls, rollsAhead ){
    return (rollsAhead == 1 ? rolls.slice(2) :  rolls.slice(1))
  }

  #currentFrame() {
    if (this.#newFrame()){
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
  if (this.frames.at(-1).frameComplete()) { return true }
  return false
  }

}

module.exports = ScoreCard;