class ScoreCard{
  constructor(){
  this.currentGame = [[], [], [], [], [], [], [], [], [], []]; 
  this.currentRoll = 1;
  this.currentFrame = 1;
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

  calculateScore(){
    let score = this.currentGame.reduce((total, current) => total.concat(current), []).reduce((a, b) => a + b, 0);
    return score
  }


}


module.exports = ScoreCard;
