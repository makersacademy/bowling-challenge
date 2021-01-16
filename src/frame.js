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
    this.frame.bonus = bonus;
  }

  rollScore() {
    return this.frame.rolls.reduce(function(a, b){
      return a + b;
    });
  }

  totalScore() {
    return this.rollScore() + this.frame.bonus
  }

};
