'use strict';

class Game {
  constructor (frame = new Frame()) {
    this.frames = [];
    this.current_frame = frame;
  }

  roll(score) {
    this.current_frame.add_score(score);
  }








}