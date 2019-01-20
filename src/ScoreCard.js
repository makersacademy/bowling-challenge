class Scorecard {
  
  constructor(frameLength) {
    this.info = {
      'numOfFrames' : [],
      'currentScores' : [] 
    }
    this.frameLength = frameLength || 10
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

  isGameOver(){
   if (this.info.numOfFrames.length === this.frameLength ) {return true }
    return false
  };

};