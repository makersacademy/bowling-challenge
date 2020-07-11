class Bowling {

constructor() {
  this.rolls = []
};

roll(n) {
  this.rolls.push(n)
};

display() {
  return this.rolls;
}

total() {
  let total = 0;
  let go = 0;

  for (let frame = 0; frame < 10; frame++) {
    total += this.rolls[go] + this.rolls[go+1]
    frame+2
  }
  return total; 
  // return this.rolls.reduce((a, b) => a + b, 0);
}
};