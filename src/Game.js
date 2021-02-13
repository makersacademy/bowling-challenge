// require_relative 'Frame'

const MAX_FRAMES = 10;
const MAX_SCORE = 10;
const MIN_SCORE = 0;

class Game{
  constructor(frameClass = Frame){
    this.frames = {}

    this.frame = frameClass;
    this.pins = 10
  }

  UpdateCurrentFrame(){
    return this.frames[1] = 3;
  }
}
