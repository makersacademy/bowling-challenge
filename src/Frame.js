class Frame {
  constructor() {
    this.scores = [];
    this.frameComplete = false;
    this.frameScore = 0
  }

  roll = pins => {
    if(this.scores.length === 2 || this.isStrike() || this.isSpare()){
      throw new Error('frame complete');
    } else {
      this.scores.push(pins);
      this.strikeCheck();
      this.spareCheck();  
      this.frameCompleted();
    }
  }

  showScores = () => {
    return this.scores;
  }

  strikeCheck = () => {
    if(this.scores[0] === 10) {
      this.scores[0] = 'strike';
    }
  }

  isStrike = () => {
    if(this.scores[0] === 'strike') {
      return true;
    } else {
      return false;
    }
  }

  spareCheck = () => {
    if(this.scores[0] + this.scores[1] === 10) {
      this.scores[0] = "spare";
      this.scores.pop()
    }
  }

  isSpare = () => {
    if(this.scores[0] === "spare") {
      return true;
    } else {
      return false;
    }
  }

  frameCompleted = () => {
    if (this.scores.length === 2 || this.isStrike() || this.isSpare()) {
      this.frameComplete = true;
      this.calculateFrameScore();
    }
  }

  isComplete = () => this.frameComplete;

  calculateFrameScore = () => {
    if (!this.isStrike() && !this.isSpare()) {
      this.frameScore += this.scores[0] + this.scores[1]
    }
  }

  update = score => this.frameScore = 10;

  showFrameScore = () => this.frameScore;
}