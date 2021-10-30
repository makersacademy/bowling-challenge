class Game {
  constructor() {
    this.rolls = [];
    this.visual_scores = [];
  }
  roll(pins) {
    if (pins === 10 && this.visual_scores.length % 2 === 0) {
      this.visual_scores.push(" ");
      this.visual_scores.push("x");
    } else if (pins === 10 && this.visual_scores.length % 2 !== 0) {
      this.visual_scores.push("/");
    } else {
      this.visual_scores.push(pins);
    };

    this.rolls.push(pins);
    
  }
  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      
      if(this.isStrike(rollIndex)){
        score += this.strikeBonus(rollIndex);
        rollIndex ++;
        continue;
      }
      
      let frameScore = this.frameTotal(rollIndex);

      if(this.isSpare(frameScore)){
        score += this.spareBonus(rollIndex);
      } else {
        score += frameScore;
      }

      rollIndex += 2;
    }
    return score;
  }
  frameTotal(rollIndex){
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1]
  }
  spareBonus(rollIndex){
    return 10 + this.rolls[rollIndex + 2]
  }
  strikeBonus(rollIndex){
    return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }
  isSpare(frameScore){
    return frameScore === 10;
  }
  isStrike(rollIndex){
    return this.rolls[rollIndex] === 10;
  }
}

module.exports = Game;
