'use strict'
class ScoreCard {

  constructor(){
    // this.finalScore = 0;
    this.scoreArray = [];
    this.MAXIMUM_FRAMES = 10;
  }

  recordScore(frameNumber, rollOne = 0, rollTwo = 0){
    const frameArray = [frameNumber, rollOne, rollTwo];
    this.scoreArray.push(frameArray);  
    // console.log('scoresArray.....')
    // console.log(this.scoreArray);
  }

  totalScore(){
    const scores = this.scoreArray;
    const total = scores.map(score => score[1] + score[2] )
      .reduce( (sum, num) => sum + num );
    return total;
  }

  experiment(){
    const scores = this.scoreArray;    
    const result = scores.map(
      x => {
        if(x[1] === 10){
          if(scores[scores.indexOf(x) + 1][1] === 10){
            return 10 + scores[scores.indexOf(x) + 1][1] + scores[scores.indexOf(x) + 1][2] + scores[scores.indexOf(x) + 2][1];
          }
          return 10 + scores[scores.indexOf(x) + 1][1] + scores[scores.indexOf(x) + 1][2];
        } else {
          return x[1] + x[2];
        }
      }
    );
    return result.reduce((sum, num) => sum + num);
  }

  finalScore(){
    if(this.isGameComplete()){
      return this.experiment();
    } else {
      throw error;
    }
  }


  isGameComplete(){
    return this.scoreArray.length >= this.MAXIMUM_FRAMES;
  }

  

}

module.exports = ScoreCard;