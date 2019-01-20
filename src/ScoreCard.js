class Scorecard {
  
  constructor(frameLength, rollLength) {
    this.infoArrays = {
      'numOfFrames' : [],
      'currentScores' : [] 
    }
    this.frameLength = frameLength || 10
    this.rollLength = rollLength || 20
  };

  receiveFrame(addFrame) {
    let frame = new Frame(addFrame);
    this.infoArrays.numOfFrames.push(frame);
    return frame.length
  };

  bowlToScore(roll1, roll2){
    
    this.infoArrays.currentScores.push(roll1, roll2);
    return roll1, roll2
  };

  accumScore(){
    let sum = this.infoArrays.currentScores.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
        return sum;
  };

  isGameOverByFrames(){
   if (this.infoArrays.numOfFrames.length === this.frameLength ) {return true }
    return false;
  };

  isGameOverByRolls() {
    if (this.infoArrays.currentScores.length === this.rollLength){return true}
    else  {
      return false}
  };

};