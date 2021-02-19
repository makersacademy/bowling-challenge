'use strict';

const MAX_FRAMES = 10;
const MAX_FFRAME_SCORE = 10;
const MIN_SCORE = 0;

class Game{
  constructor(frameClass = Frame){
    this.frames = []
    for (let i = 1; i < MAX_FRAMES; i++) {
      this.frames.push(new frameClass())
    }
    this.frames.push(new LastFrame())
    this.frame_counter = 0
  }

  run(roll){
    this.currentFrame().addRolls(roll);
    if(this.currentFrame().isFinished()){
      this.updatePreviousFrame();
      this.moveToNextFrame();
    }
  }

  moveToNextFrame(){
    return this.frame_counter += 1;
  }

  currentFrame(){
    return this.frames[this.frame_counter];
  }

  previousFrame(){
    return this.frames[this.frame_counter - 1];
  }

  frameBeforeLast(){
    return this.frames[this.frame_counter - 2];
  }

  addStrikePoints(){
    if( this.frame_counter === 0 || !this.previousFrame().isStrike() ){
      return;
    }
    else if( this.previousFrame().isStrike() ){
      this.previousFrame().frame_score += this.currentFrame().frame_score;
      if( this.frame_counter > 1 && this.frameBeforeLast().isStrike() ){
        this.frameBeforeLast().frame_score += this.currentFrame().roll1;
      }
    }
  }

  addSparePoints(){
    if( this.frame_counter === 0 || !this.previousFrame().isSpare() ){
      return;
    }
    if( this.previousFrame().isSpare() ){
      this.previousFrame().frame_score += this.currentFrame().roll1;
    }
  }

  updatePreviousFrame(){
    this.addStrikePoints();
    this.addSparePoints();
  }

  total_score() {
    var total = 0
    this.frames.forEach(function(frame){
      total += frame.frame_score;
    })
    return total;
  }
}
