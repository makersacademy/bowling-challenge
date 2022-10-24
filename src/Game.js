class Game {

  constructor() {
    this.frames = []
  }

  roll(pinsKnockedDown) {
    if (this.gameOver()){
      return
    }
    if (this.isNewFrameNeeded()) {
      this.addFrame(pinsKnockedDown);
    } else {
    this.addRollToExistingFrame(pinsKnockedDown)
    }
    this.addBonusPointsforSpare();
    this.addBonusPointsforStrike();
  }

  addFrame(pinsKnockedDown) {
    var frame = new Frame();
    frame.roll(pinsKnockedDown)
    this.frames.push(frame);
  }
  isNewFrameNeeded() {
    return this.frames.length == 0 || this.frames[this.frames.length -1].rolls.length == 2 || this.wasStrike()
  }

  addRollToExistingFrame(pinsKnockedDown) {
    var frame = this.frames[this.frames.length -1]
    frame.roll(pinsKnockedDown)
  }

  wasStrike() {
    return this.frames[this.frames.length -1].strike
  }

  normalGameEnd() {
    return this.frames.length == 10 && this.frames[this.frames.length -1].rolls.length == 2 && this.frames[this.frames.length -1].pinsLeft != 0
  }

  spare_in_10th() {
    return this.frames.length == 11 && this.frames[this.frames.length -1].rolls.length == 1 && this.frames[9].spare
  }

  endAfterThreeStrikes() {
    return this.frames.length == 12
  }

  gameOver(){
    return (this.endAfterThreeStrikes() || this.normalGameEnd() || this.spare_in_10th())
  }

  currentScore() {
    return this.frames
    .map(function(frame){
    return frame.frame_score;})
    .reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
    },0);
  }
  addBonusPointsforSpare() {
    if (this.frames.length > 1 && this.frames[this.frames.length -2].spare && this.frames[this.frames.length -1].rolls.length == 1){
      return this.frames[this.frames.length -2].frame_score += this.frames[this.frames.length -1].frame_score
    }
  }
  addBonusPointsforStrike(){

  }


};
