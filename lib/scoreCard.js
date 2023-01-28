class ScoreCard{
  constructor(){
  this.currentGame = []; 
  this.currentFrame = 1;
  }

  addFrame(frame){
    this.currentGame.push(frame);
    this.currentFrame += 1;
    return this.currentGame;
  }

  currentScore(){
    return this.currentGame;
  }

  calculateScore(){
    let score = this.currentGame.reduce((total, current) => total.concat(current), []).reduce((a, b) => a + b, 0);
    return score
  }
}


module.exports = ScoreCard;
