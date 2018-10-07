import { Frame } from './frame';

function createNewFrame() {
  this.frames.push(new Frame());
  return this.lastFrame();
}

function gameHasStarted() {
  return this.frames.length > 0;
}

function getCurrentFrame() {
  if (!this.gameHasStarted() || this.lastFrameIsOver()) {
    return this.createNewFrame();
  }
  return this.lastFrame();
}

function lastFrame() {
  return this.frames[this.frames.length - 1];
}

function lastFrameIsOver() {
  let lastFrame = this.lastFrame();
  if (this.isTenthFrame) {
    return false;
  } else {
    return lastFrame.complete || lastFrame.score === 10;
  }
}

function isTenthFrame() {
  return this.frames.length === 10;
}

export class Scorecard {
  constructor(frames = []) {
    // bind private functions to this class
    this.createNewFrame = createNewFrame.bind(this);
    this.gameHasStarted = gameHasStarted.bind(this);
    this.getCurrentFrame = getCurrentFrame.bind(this);
    this.lastFrame = lastFrame.bind(this);
    this.lastFrameIsOver = lastFrameIsOver.bind(this);
    this.isTenthFrame = isTenthFrame.bind(this);
    this.frames = frames;
    this.totalScore = 0;
  }

  bowl(pinsKnockedDown) {
    let currentFrame = this.getCurrentFrame();
    currentFrame.bowl(pinsKnockedDown);
  }
}
