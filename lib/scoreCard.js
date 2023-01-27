class ScoreCard{
  constructor(){
  this.currentGame = []; 
  this.currentRoll = 1;
  this.currentFrame = 1;
  }

  addFrame(array){
    this.currentGame.push(array);
    return this.currentGame;
  }

  readScore(){
    console.log('read score' + this.currentGame)
    return this.currentGame;
  }

  calculateScore(){
    let score = this.currentGame.reduce((total, current) => total.concat(current), []).reduce((a, b) => a + b, 0);
    return score
  }


}


module.exports = ScoreCard;
