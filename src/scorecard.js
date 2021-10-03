class Scorecard {
  static startGame(name) {
    this.currentGame = new Scorecard(name);
    this.currentGame.frames.push(new Frame);
  }

  static currentGame;

  static bowl() {
    if (this._gameEnded()) {
      return `The game has ended. Your final score was ${this.currentGame.score()}.`
    } else {
      if (this.currentGame._getMostRecentFrame().frameFinished) {
        this.currentGame._nextFrame();
        this.currentGame._getMostRecentFrame().bowl();
      } else {
        this.currentGame._getMostRecentFrame().bowl();
      }
    }
  }

  static _gameEnded() {
    return this.currentGame.framesPlayed() === 10 && this.currentGame._getMostRecentFrame().frameFinished;
  }

  constructor(name) {
    this.name = name
    this.frames = []
  }

  score() {
    let frameScoring = this.frames.map(frame => frame.frameScore) 
    return frameScoring.reduce((a, b) => a + b);
  }

  framesPlayed() {
    return this.frames.length;
  }

  _nextFrame() {
    this.frames.push(new Frame);
  }

  _getMostRecentFrame() {
    return this.frames[this.frames.length - 1];
  }

  _getPreviousFrame() {
    return this.frames[this.frames.length - 2];
  }

  _get2ndPreviousFrame() {
    return this.frames[this.frames.length - 3];
  }
}