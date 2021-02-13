'use strict';

const MAX_FRAMES = 10;
const MAX_SCORE = 10;
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

  NextFrame(){
    return this.frame_counter += 1;
  }

  CurrentFrame(){
    return this.frames[this.frame_counter];
  }

  PreviousFrame(){
    return this.frames[this.frame_counter - 1];
  }

  FrameBeforeLast(){
    return this.frames[this.frame_counter - 2];
  }

  AddStrikePoints(){
    if( this.frame_counter === 0){
      return;
    }
    else if( this.PreviousFrame().isStrike() ){
      return this.PreviousFrame().frame_score += this.CurrentFrame().frame_score;
    }
  }
}
