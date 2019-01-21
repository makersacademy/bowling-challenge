class ScoreCard {
  constructor(){
    this.rolls = [];
  };

  roll(nPins){
    this.rolls.push(nPins);
  };

  score(){
    let s = 0;
    let r = 0;
    for (let frames = 0; frames < 10; frames++){
      if(this.rolls[r] === 10){
        s += this.rolls[r] + this.rolls[r+1] + this.rolls[r+2]
        r += 1;
      } else if (this.rolls[r] + this.rolls[r+1] === 10){
        s += this.rolls[r] + this.rolls[r+1] + this.rolls[r+2]
        r += 2
      } else {
        s += this.rolls[r] + this.rolls[r+1]
        r += 2
      };
    };
    return s;
  };

};
