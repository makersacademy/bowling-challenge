class Bowling {

constructor() {
  this.frame = []
};

roll(n) {
  this.frame.push(n)
};

display() {
  return this.frame;
}

total() {
  return this.frame.reduce((a, b) => a + b, 0);
}
};