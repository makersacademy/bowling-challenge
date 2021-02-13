class Frame {
  constructor() {
    this.score = [];
  }

  roll = pins => {
    if(this.score.length === 2 || this.isStrike()){
      throw new Error('frame complete')
    }
    this.score.push(pins);
  }

  showScore = () => {
    return this.score;
  }

  isStrike = () => {
    if(this.score[0] === 10) {
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
}