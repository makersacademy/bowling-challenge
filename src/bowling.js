class Bowling {

constructor() {
  this.rolls = []
}

roll(n) {
  this.rolls.push(n)
}

display() {
  return this.rolls;
}

total() {
  let score = 0;
  let go = 0;

  for (let frame = 0; frame < 10; frame++) {
    if(this.rolls[go] == 10) {
      score += this.rolls[go] + this.rolls[go+1] + this.rolls[go+2]
      go += 1;
    }
    else if(this.rolls[go] + this.rolls[go+1] == 10) {
      score += this.rolls[go] + this.rolls[go+1] + this.rolls[go+2];
      go += 2;
    }
    else
    { score += this.rolls[go] + this.rolls[go+1]
      go += 2;
    } 
  }
  return score; 
  // return this.rolls.reduce((a, b) => a + b, 0);
}
}