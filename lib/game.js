const Frame = require('../lib/frame');

class Game {
  constructor() {
    this.frames = [];
    this.current_frame = null;
  };

  addFrame(frame) {
    this.frames.push(frame);
  }

  getFrames() {
    return this.frames;
  }

  getGameResult() {
    if (this.frames.length == 0) {
      return 0;
    } else {
      let result = this.frames.reduce((sum, frame) => sum + frame.getFrameScore(), 0);
      console.log(this.frames[0].getFrameScore());
      return result;
    };
  };

  makeRoll(score) {
    if (this.current_frame == null) {
      this.startFrame();
      this.current_frame.makeRoll(score);
      if (score == 10) {
        this.endFrame();
      };
      return (`First roll with score ${score} in frame ${this.frames.length + 1}`);
    } else {
      this.current_frame.makeRoll(score);
      if (this.current_frame.getFrameScore() == 10){
        this.endFrame();
        return ('Split! Make roll to start next frame');
      } else {
        this.endFrame();
        return (`Second roll with score ${score} in frame ${this.frames.length + 1}`);
      }
    } 
  }

  startFrame() {
    this.current_frame = new Frame();
  }

  endFrame() {
    this.frames.push(this.current_frame);
    this.current_frame = null;
  }



  





};

module.exports = Game;