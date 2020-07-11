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
}