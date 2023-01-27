class ScoreCard{
  constructor(){
  this.currentGame = [[], [], [], [], [], [], [], [], [], []]; 
  this.currentRoll = 1;
  this.currentFrame = 1;
  this.currentScore = 0;
  }

  getRoll(number){
    if(this.currentRoll == 1){
      this.currentGame[this.currentFrame - 1][0] = number
      this.currentRoll += 1
      return number
    }else{
      this.currentGame[this.currentFrame - 1][1] = number
      this.currentRoll = 1
      this.currentFrame ++;
      return number
    }
  }
}


module.exports = ScoreCard;
