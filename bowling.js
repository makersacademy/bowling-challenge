class BowlingGame {
    constructor(frames, rollsPerFrame, totalPins) {
      this.frames = frames;
      this.rollsPerFrame = rollsPerFrame;
      this.totalPins = totalPins;
      this.scores = [];
      this.currentFrame = 0;
    }
  
    play() {
      for (let i = 0; i < this.frames; i++) {
        this.playFrame();
      }
      this.playExtraBalls();
      console.log("Total Score: ", this.calculateTotalScore());
    }
  
    playFrame() {
      let ball1 = this.getRandomScore();
      if (ball1 === this.totalPins) {
        this.scores[this.currentFrame] = this.totalPins + this.getRandomScore() + this.getRandomScore();
        this.currentFrame++;
        return;
      }
      let ball2 = this.getRandomScore(this.totalPins - ball1);
      let frameScore = 0;
      if (ball1 + ball2 === this.totalPins) {
        frameScore = this.totalPins + this.getRandomScore();
      } else {
        frameScore = ball1 + ball2;
      }
      this.scores[this.currentFrame] = frameScore;
      this.currentFrame++;
    }
  
    playExtraBalls() {
      let extraBalls = 0;
      if (this.scores[this.frames - 1] === this.totalPins) {
        extraBalls = this.getRandomScore() + this.getRandomScore();
        this.scores[this.frames - 1] += extraBalls;
      } else if (this.scores[this.frames - 1] > this.totalPins) {
        extraBalls = this.getRandomScore();
        this.scores[this.frames - 1] += extraBalls;
      }
    }
  
    getRandomScore(limit = this.totalPins) {
      return Math.floor(Math.random() * limit);
    }
  
    calculateTotalScore() {
      return this.scores.reduce((a, b) => a + b, 0);
    }
  }
  
  const game = new BowlingGame(10, 2, 10);
  game.play();

module.exports = BowlingGame;