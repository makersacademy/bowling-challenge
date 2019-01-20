class ScoreCard {
  constructor(){
    this.rolls = [];
  };

  roll(nPins) {
    this.rolls.push(nPins);
  };

  score() {
    let s = 0
    for (let i = 0; i < 20; i++){
      s += this.rolls[i]
    };
    return s;
  };

};
