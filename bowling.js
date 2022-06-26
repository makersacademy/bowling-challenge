class BowlingScore {
  constructor(scoreCard) {
    this.scoreCard = scoreCard;
    if (this.scoreCard.length < 10) this.incompleteGame();
  };

  result(){
    this.scoreCard.map((frame, index) => {
      if (this.spare(frame)) {
        frame.push(this.scoreCard[index + 1][0]);
      } else if (this.strike(frame)) {
        frame.push(this.strikeBonus(index));
      };
    })
    const flatScoreCard = this.scoreCard.flat();
    return flatScoreCard.reduce((prev, current) => prev + current);
  };

  incompleteGame() {
    this.scoreCard.push([0,0]);
  }

  spare(element) {
    return element.length === 2 && element[0] + element[1] === 10;
  }

  strike(element) {
    return element.length === 1 && element[0] === 10;
  }

  strikeBonus(index){
    const nextFrame = this.scoreCard[index + 1];
    if (this.strike(nextFrame)) {
      console.log(nextFrame)
      return nextFrame[0] + this.scoreCard[index + 2][0];
    } else {
      return nextFrame[0] + nextFrame[1];
    };
  };
};

module.exports = BowlingScore;