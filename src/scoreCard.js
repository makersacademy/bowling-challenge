'use strict'
class ScoreCard {

  constructor(){
    this.scoreArray = [];
    this.MAXIMUM_FRAMES = 10;
    this.gameScore = null;
    this.frameScoresArray = [];
    // this.frames = [
    //   frame1 = new Frame(this),
    //   frame2 = new Frame(this),
    //   frame3 = new Frame(this),
    //   frame4 = new Frame(this),
    //   frame5 = new Frame(this),
    //   frame6 = new Frame(this),
    //   frame7 = new Frame(this),
    //   frame8 = new Frame(this),
    //   frame9 = new Frame(this),
    //   frame10 = new LastFrame(this)
    // ];
  }

  recordScore(rollOne = 0, rollTwo = 0, rollThree = 0){
    const frameArray = [rollOne, rollTwo, rollThree];
    this.scoreArray.push(frameArray);  
  }

  // recordScore(frameNumber, firstRoll, secondRoll){
  //   frameNumber.firstRoll = firstRoll;
  //   frameNumber.secondRoll = secondRoll;

  // }
  
  frameScores(){
    const frameScores = this.frameScoresArray;
    this.frames.forEach(frame => {
      const frameScore = frame.frameScore
      frameScore === null ? frameScores.push(0) : frameScores.push(frameScore);
    });
  }
  
  finalScore(){
    const frameScores = this.frameScoresArray;
    return frameScores.reduce((sum, num) => sum + num);
  }

  experiment(){
    const scores = this.scoreArray;    
    const result = scores.map(
      x => {
        if(scores.indexOf(x) === 9){
          if(x[0] === 10) {
            if(x[1] === 10){
              if(x[2] === 10){
                return 30;
              } else {
                return x[0] + x[1] + x[2];
              }
            }
          } else if(x[0] + x[1] == 10 && x[1] != 0){
            return x[0] + x[1] + x[2];
          } 
        } 
        if(x[0] === 10 && scores[scores.indexOf(x) + 1]){          
          if(scores[scores.indexOf(x) + 1][0] === 10){
            return 10 + scores[scores.indexOf(x) + 1][0] + scores[scores.indexOf(x) + 1][1] + scores[scores.indexOf(x) + 2][0];
          }
          return 10 + scores[scores.indexOf(x) + 1][0] + scores[scores.indexOf(x) + 1][1];         

        } else if(x[0] + x[1] === 10 && x[1] != 0){
          if(scores[scores.indexOf(x) + 1]){ 
            return 10 + scores[scores.indexOf(x) + 1][0]; 
          }
          
        } else {
          return x[0] + x[1];
        }
      }
    );
    return result.reduce((sum, num) => sum + num);
  }

  handleFrameTen(scores, x){
    if(scores.indexOf(x) === 9){
      if(x[0] === 10) {
        if(x[1] === 10){
          if(x[2] === 10){
            return 30;
          } else {
            return x[0] + x[1] + x[2];
          }
        }
      } else if(x[0] + x[1] == 10 && x[1] != 0){
        return x[0] + x[1] + x[2];
      } 
    } 
  }

  isGameComplete(){
    return this.scoreArray.length === this.MAXIMUM_FRAMES;
  }  

}

module.exports = ScoreCard;