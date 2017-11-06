const INIT_SCORE = 0;
const INIT_FRAME_NO = 1;
const FRAMES_IN_GAME = 10;

function Game() {
  this._score = INIT_SCORE;
  this._frameNo = INIT_FRAME_NO;
  this._frames = [];
  for (let i = 1; i <= FRAMES_IN_GAME; i++)
  {
    this._frames.push(new Frame());
  }

  console.log(this._frames);

  this._currentFrame = [];
}

Game.prototype.getCurrentFrame = function() {
  return this._currentFrame;
};

Game.prototype.getScore = function() {
  return this._score;
};

Game.prototype.getFrames = function() {
  return this._frames;
};

Game.prototype.getFrameNo = function() {
  return this._frameNo;
};
