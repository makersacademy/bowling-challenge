class Frame {

  constructor(roll) {
    this.frame = {
      rolls: [roll],
      bonus: 0
    };
  }

  addRoll(roll) {
    this.frame.rolls.push(roll);
  }

  addBonus(bonus) {
    this.frame.bonus += bonus;
  }

  firstRoll() {
    return this.frame.rolls[0]
  }

  secondRoll() {
    return this.frame.rolls[1]
  }

  rollScore() {
    return this.frame.rolls.reduce(function(a, b){
      return a + b;
    });
  }

  totalScore() {
    return this.rollScore() + this.frame.bonus
  }

  isSpare() {
    return this.rollScore() === 10 && this.frame.rolls.length === 2
  }

  isStrike() {
    return this.rollScore() === 10 && this.frame.rolls.length === 1
  }

  isComplete() {
    return this.frame.rolls.length === 2 || this.isStrike()
  }

};
