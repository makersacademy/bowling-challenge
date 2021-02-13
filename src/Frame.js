class Frame {
  constructor() {
    this.score = [];
    this.frameComplete = false;
  }

  roll = pins => {
    if(this.score.length === 2 || this.isStrike()){
      throw new Error('frame complete');
    } else {
      this.score.push(pins);
      this.frameCompleted();
    }
  }

  showScore = () => {
    return this.score;
  }

  isStrike = () => {
    if(this.score[0] === 10) {
      this.score[0] = 'strike';
    }

    if(this.score[0] === 'strike') {
      return true;
    } else {
      return false;
    }
  }

  isSpare = () => {
    if(!this.isStrike() && this.score[0] + this.score[1] === 10) {
      return true;
    } else {
      return false;
    }
  }

  frameCompleted = () => {
    if (this.score.length === 2 || this.isStrike()) {
      this.frameComplete = true;
    }
  }

  isComplete = () => {
    return this.frameComplete;
  }
}