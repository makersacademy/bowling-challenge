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
    let score = 0
    this.currentGame.forEach(frame => {
      console.log(frame.checkStrike())
      console.log(frame.checkSpare())
      if(frame.checkStrike() == false && frame.checkSpare() == false){
        score += frame.frameSum()
      }
      })
    return score
  }
}


module.exports = ScoreCard;

// map over each of the array elements
// if checkstrike and checkspare == false
// sum the parts and map on top of element
// if checkStrike == true
// get next item and add to strike element score
// if checkspare true
// get next item and add to score
// else return an error because something is wrong with the frame