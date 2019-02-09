
class ScoreCard {

  constructor(){
    this.finalScore = 0;
    this.scoreArray = [];
    this.MAXIMUM_FRAMES = 10;
  }

  recordScore(frameNumber, rollOne = 0, rollTwo = 0){
    const frameArray = [frameNumber, rollOne, rollTwo];
    this.scoreArray.push(frameArray);  
  }

  totalScore(){
    const scores = this.scoreArray;
    const total = scores.map(score => score[1] + score[2] )
      .reduce( (sum, num) => sum + num );
    return total;
  }

  isGameComplete(){
    return this.scoreArray.length >= this.MAXIMUM_FRAMES;
  }

  finalScore(){
    if (isGameComplete() === true){
      return totalScore();
    } else {
      throw 'error';
    }
  }

}

module.exports = ScoreCard;