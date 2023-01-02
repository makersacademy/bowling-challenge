class Bowling {
constructor(){
  this.scorecard = []
}

roll(pins){
  this.scorecard.push(pins);
}

getScore(){
  let score = 0;
  let cardIndex = 0;

  for (let frame = 0; frame < 10; frame++){
    // if strike
    if (this.scorecard[cardIndex] === 10) {
      score += 10 + this.scorecard[cardIndex + 1] + this.scorecard[cardIndex + 2];
      cardIndex ++;
      // continue means skip one loop iteration 
      continue;
    }
    const frameScore = this.scorecard[cardIndex] + this.scorecard[cardIndex + 1];
    // if spare 
    if (frameScore === 10){
      score += 10 + this.scorecard[cardIndex + 2]
    } else {
      score += frameScore;
    
    }
    cardIndex += 2;
  }
  return score;
}
}

module.exports = Bowling;