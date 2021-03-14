class ScoreCalculator {

  calculate(frames) {
    let totalScore = 0

    // [[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6]]
    for (let i = 0; i < frames.length - 2; i++) {   
      totalScore += this.calculateFrame(frames[i],frames[i+1],frames[i+2]);   
    }
    totalScore += this.calculateFrame(frames[frames.length -2], frames[frames.length -1]);
    
    totalScore += frames[frames.length -1].reduce((a, b) => a + b);
    return totalScore;
  }

  calculateFrame(currentFrame, nextFrame, thirdFrame = []) {
    let bonusScore = 0;
    let baseScore = currentFrame.reduce((a, b) => a + b)

    if (baseScore === 10) {
      if (currentFrame.length === 1 ) {
        if (nextFrame.length === 1) {
          bonusScore = nextFrame[0] + thirdFrame[0];
        } else {
          bonusScore = nextFrame[0] + nextFrame[1];
        }
      } else if (currentFrame.length === 2){
        bonusScore = nextFrame[0];
      }
    }
    return baseScore + bonusScore;
  }
}
