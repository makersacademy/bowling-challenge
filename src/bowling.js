class Game {

  constructor() {
    this.gameScore = 0;
    this.frame = 1;
    this.currentRoll = 1;
    this.currentFrameScore = 0;
    this.frameScores = [];
  };

roll(pins) {
if (this.frame < 10) {
  console.log("Current frame: " + this.frame + " Current roll: " + this.currentRoll);
  if (pins > 10) {
    throw 'Maximum 10 pins';
} else {
    this.gameScore += pins;
    this.currentFrameScore += pins;

  if (this.currentRoll === 1) {
  this.currentRoll ++
} else {
  this.currentRoll = 1;
  this.frame ++;
  this.frameScores.push(this.currentFrameScore);
  console.log("Current frame score: " + this.currentFrameScore);
  this.currentFrameScore = 0;
};
    console.log("All frames: " + this.frameScores);
    return "Game score: " + this.gameScore;
  };
} else if (this.frame === 10) {
  return this.finalFrame();
} else {
  console.log("All frames: " + this.frameScores);
  return "Game over! End score: " + this.gameScore;
};
};

finalFrame() {
  return this.gameScore;
};
};
