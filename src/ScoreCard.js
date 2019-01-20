class Scorecard {
  
  constructor(frameLength, rollLength) {
    this.info = {
      'numOfFrames' : [],
      'currentScores' : [] 
    }
    this.frameLength = frameLength || 10
    this.rollLength = rollLength || 20
  };

  receiveFrame(addFrame) {
    this.info.numOfFrames.push(addFrame);
    return addFrame
  };

  bowlToScore(numberOfPins){
    this.info.currentScores.push(numberOfPins);
    return numberOfPins
  };

  addScore(){
    let sum = this.currentScores.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
        return sum;
  };

  isGameOverByFrames(){
   if (this.info.numOfFrames.length === this.frameLength ) {return true }
    return false;
  };

  isGameOverByRolls() {
    if (this.info.currentScores.length === this.rollLength){return true}
    else  {
      return false}
  };

};