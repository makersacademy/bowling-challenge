
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

  experiment(){
    const scores = this.scoreArray;
    const result = scores.map(
      x => x[1] === 10 ? 
        10 + scores[scores.indexOf(x) + 1][1] + scores[scores.indexOf(x) + 1][2] : (x[1] + x[2]) 
    );
    return result.reduce((sum, num) => sum + num);
  }


  isGameComplete(){
    return this.scoreArray.length >= this.MAXIMUM_FRAMES;
  }

  finalScore(){
    if (isGameComplete() === true){
      return experiment();
    } else {
      throw 'error';
    }
  }

}

module.exports = ScoreCard;