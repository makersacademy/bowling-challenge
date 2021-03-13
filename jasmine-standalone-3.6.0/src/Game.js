class Frame{
  constructor(){
    this.rolls = [];
    this.score = 0;
  };

  addRoll(roll){
    this.rolls.push(roll);
    this.score += roll;
  };

  isStrike(){
    return this.rolls[0] === 10;
  }

  isSpare(){
    return !this.isStrike() && this.rolls[0] + this.rolls[1] === 10;
  }

};

class Game{
  constructor(){
    this.frames = [];
    this.totalScore = 0;
  };

  addFrame(frame){
    if (this.frames.length > 0) {
      this.bonuses(frame);
    };
    this.frames.push(frame);
    this.totalScore += frame.score;
  };

  calculateStrikeBonus(previous_frame, next_frame){
    let bonus = next_frame.score;
    previous_frame.score += bonus;
    this.totalScore += bonus;
  }

  calculateSpareBonus(previous_frame, next_frame){
    let bonus = next_frame.rolls[0];
    previous_frame.score += bonus;
    this.totalScore += bonus;
    return bonus
  };

  calculateSecondStrikeBonus(previous_frame, next_but_one_frame){
    let bonus = next_but_one_frame.rolls[0];
    previous_frame.score += bonus;
    this.totalScore += bonus;
    return bonus
  };

  bonuses(frame){
    if (this.frames[this.frames.length - 1].isStrike())
      this.calculateStrikeBonus(this.frames[this.frames.length - 1], frame)
  }

};
