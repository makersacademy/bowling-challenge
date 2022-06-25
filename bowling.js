class BowlingScore {
  constructor(scoreCard) {
    this.scoreCard = scoreCard;
    if (this.scoreCard.length < 10) this.incompleteGame();
  };

  result(){
    this.scoreCard.map((frame, index) => {
      if (frame.length === 2 && frame[0] + frame[1] === 10) {
        frame.push(this.scoreCard[index + 1][0]);
      } else if (frame.length === 1 && frame[0] === 10) {
        const nextFrame = this.scoreCard[index + 1];
        if (nextFrame.length === 1 && nextFrame[0] === 10) {
          frame.push(nextFrame[0]);
          frame.push(this.scoreCard[index + 2][0]);
        } else {
          frame.push(this.scoreCard[index + 1][0]);
          frame.push(this.scoreCard[index + 1][1]);
        };
      }
    })
    const flatScoreCard = this.scoreCard.flat();
    return flatScoreCard.reduce((prev, current) => prev + current);
  };

  incompleteGame() {
    this.scoreCard.push([0,0]);
  }

  // strike(frame) {
  //   frame.length === 1 && frame[0] === 10;
  // }

  // strikeBonus(frame, index){
  //   const nextFrame = this.scoreCard[index + 1];
  //   if (nextFrame === strike) {
  //     frame.push(nextFrame[0]);
  //     frame.push(this.scoreCard[index + 2][0]);
  //   } else {
  //     frame.push(this.scoreCard[index + 1][0]);
  //     frame.push(this.scoreCard[index + 1][1]);
  //   };
  // }


};

module.exports = BowlingScore;