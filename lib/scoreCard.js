class ScoreCard{
  constructor(){
  this.currentGame = []; 
  this.currentFrame = 1;
  }

  addFrame(frame){
    if(this.currentFrame == 11){
      return 'You cannot have 11 frames'
    } else{
      this.currentGame.push(frame);
      this.currentFrame += 1;
      return this.currentGame;
    }
  }

  currentScore(){
    return this.currentGame;
  }

  calculateScore(){
    let score = 0
    this.currentGame.forEach(frame => {
      let frameCount = 1
      if(frame.checkStrike() == false && frame.checkSpare() == false){
        score += frame.frameSum()
        frameCount += 1
      } else if(frame.checkStrike() == true){
        score += (frame.frameSum() + this.currentGame[frameCount + 1].frameSum())
        frameCount += 1
      } else if(frame.checkSpare() == true){
        score += (frame.frameSum() + this.currentGame[frameCount + 1].addSpare())
        frameCount += 1
      }
      })
    console.log(score)
    return score
  }
}

module.exports = ScoreCard;